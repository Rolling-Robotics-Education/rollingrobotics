import { load } from 'cheerio'
import { scoreText } from './retrieval'

const CACHE_TTL_MS = 10 * 60 * 1_000
const REQUEST_TIMEOUT_MS = 10_000
const MAX_PAGE_TEXT_LENGTH = 60_000
const MAX_EXCERPT_LENGTH = 3_200

const SEED_URLS = [
  'https://www.firstinspires.org/programs/ftc/',
  'https://www.firstinspires.org/programs/ftc/game-and-season',
  'https://ftc-docs.firstinspires.org/en/latest/',
]

interface PageLink {
  title: string
  url: string
}

interface FetchedPage {
  title: string
  url: string
  text: string
  links: PageLink[]
  fetchedAt: number
}

export interface OfficialSourceContext {
  title: string
  url: string
  content: string
}

const pageCache = new Map<string, FetchedPage>()

export async function retrieveOfficialSourceContext(
  question: string,
): Promise<OfficialSourceContext[]> {
  const seedPages = await fetchAvailablePages(SEED_URLS)
  const linkedPages = await fetchAvailablePages(
    selectRelevantLinks(question, seedPages).map((link) => link.url),
  )
  const pages = deduplicatePages([...seedPages, ...linkedPages])

  return pages
    .map((page) => ({
      title: page.title,
      url: page.url,
      content: bestExcerpt(question, page.text),
      score:
        scoreText(question, `${page.title}\n${page.url}\n${page.text}`) +
        (SEED_URLS.includes(page.url) ? 1 : 4),
    }))
    .filter((source) => source.content.length > 80)
    .sort((left, right) => right.score - left.score)
    .slice(0, 5)
    .map((source) => ({
      title: source.title,
      url: source.url,
      content: source.content,
    }))
}

async function fetchAvailablePages(urls: string[]): Promise<FetchedPage[]> {
  const results = await Promise.allSettled(urls.map(fetchOfficialPage))
  const pages: FetchedPage[] = []

  for (const result of results) {
    if (result.status === 'fulfilled') {
      pages.push(result.value)
    } else {
      console.warn('[FTC source retrieval] Official page unavailable', result.reason)
    }
  }

  return pages
}

async function fetchOfficialPage(url: string): Promise<FetchedPage> {
  assertOfficialUrl(url)

  const cached = pageCache.get(url)
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached
  }

  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      Accept: 'text/html,application/xhtml+xml',
      'User-Agent': 'RollingRobotics-Sushi-FTC-Tutor/1.0',
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`)
  }

  assertOfficialUrl(response.url)
  const contentType = response.headers.get('content-type')?.toLowerCase() ?? ''
  if (!contentType.includes('text/html')) {
    throw new Error(`${response.url} did not return an HTML page`)
  }

  const html = await response.text()
  const $ = load(html)
  const title =
    normalizeText($('h1').first().text()) ||
    normalizeText($('title').first().text()) ||
    'Official FIRST Tech Challenge resource'

  const links = $('a[href]')
    .map((_index, element) => {
      const href = $(element).attr('href')
      if (!href) {
        return null
      }

      try {
        const linkedUrl = new URL(href, response.url)
        linkedUrl.hash = ''
        if (
          !isOfficialHost(linkedUrl.hostname) ||
          linkedUrl.pathname.toLowerCase().endsWith('.pdf') ||
          (linkedUrl.hostname === 'ftc-resources.firstinspires.org' &&
            linkedUrl.pathname.toLowerCase().endsWith('/game/manual'))
        ) {
          return null
        }

        return {
          title: normalizeText($(element).text()) || linkedUrl.pathname,
          url: linkedUrl.toString(),
        }
      } catch {
        return null
      }
    })
    .get()
    .filter((link): link is PageLink => link !== null)

  $('script, style, noscript, svg, nav, footer, form').remove()
  const contentElements = $('main h1, main h2, main h3, main p, main li, main td')
  const bodyElements = $('h1, h2, h3, p, li, td')
  const selectedElements = contentElements.length > 0 ? contentElements : bodyElements
  const text = selectedElements
    .map((_index, element) => normalizeText($(element).text()))
    .get()
    .filter(Boolean)
    .join('\n')
    .slice(0, MAX_PAGE_TEXT_LENGTH)

  if (text.length < 80) {
    throw new Error(`${response.url} did not contain readable content`)
  }

  const page = {
    title,
    url: response.url,
    text,
    links,
    fetchedAt: Date.now(),
  }
  pageCache.set(url, page)
  pageCache.set(response.url, page)
  return page
}

function selectRelevantLinks(
  question: string,
  pages: FetchedPage[],
): PageLink[] {
  const linksByUrl = new Map<string, PageLink & { score: number }>()

  for (const link of pages.flatMap((page) => page.links)) {
    const score = scoreText(question, `${link.title}\n${link.url}`)
    if (score <= 0) {
      continue
    }

    const existing = linksByUrl.get(link.url)
    if (!existing || score > existing.score) {
      linksByUrl.set(link.url, { ...link, score })
    }
  }

  return Array.from(linksByUrl.values())
    .sort((left, right) => right.score - left.score)
    .slice(0, 4)
    .map((link) => ({ title: link.title, url: link.url }))
}

function bestExcerpt(question: string, text: string): string {
  if (text.length <= MAX_EXCERPT_LENGTH) {
    return text
  }

  const chunks: string[] = []
  let remaining = text
  while (remaining.length > 0) {
    if (remaining.length <= MAX_EXCERPT_LENGTH) {
      chunks.push(remaining)
      break
    }

    const candidate = remaining.slice(0, MAX_EXCERPT_LENGTH)
    const lineBreak = candidate.lastIndexOf('\n')
    const splitAt =
      lineBreak >= Math.floor(MAX_EXCERPT_LENGTH * 0.6)
        ? lineBreak
        : MAX_EXCERPT_LENGTH
    chunks.push(remaining.slice(0, splitAt))
    remaining = remaining.slice(splitAt).trim()
  }

  return chunks
    .map((content) => ({ content, score: scoreText(question, content) }))
    .sort((left, right) => right.score - left.score)[0].content
}

function deduplicatePages(pages: FetchedPage[]): FetchedPage[] {
  return Array.from(
    new Map(pages.map((page) => [page.url, page])).values(),
  )
}

function assertOfficialUrl(url: string): void {
  const parsed = new URL(url)
  if (parsed.protocol !== 'https:' || !isOfficialHost(parsed.hostname)) {
    throw new Error(`Refusing to retrieve non-FIRST URL: ${url}`)
  }
}

function isOfficialHost(hostname: string): boolean {
  return (
    hostname === 'firstinspires.org' ||
    hostname.endsWith('.firstinspires.org')
  )
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}
