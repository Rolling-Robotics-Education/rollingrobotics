import { createHash } from 'crypto'
import { mkdir, rename, stat, writeFile } from 'fs/promises'
import path from 'path'
import { ensureManualFile, getManualPath, readCurrentManual } from './manual-store'
import type { ManualMetadata } from './types'

const CURRENT_MANUAL_URL =
  'https://ftc-resources.firstinspires.org/ftc/game/manual'
const MANUAL_UPDATE_INTERVAL_MS = 10 * 60 * 1_000
const MAX_PDF_BYTES = 75 * 1024 * 1024
const MAX_PAGES = 350
const REQUEST_TIMEOUT_MS = 60_000
const EXTRACTION_TIMEOUT_MS = 120_000

interface CandidateDetails {
  requestedUrl: string
  resolvedUrl: string
  etag: string
  lastModified: string
  contentLength: number
}

export interface ManualUpdateResult {
  updated: boolean
  reason: string
  metadata: ManualMetadata
}

interface RefreshOptions {
  force?: boolean
  sourceUrl?: string
}

export async function refreshFtcManual(
  options: RefreshOptions = {},
): Promise<ManualUpdateResult> {
  let current: Awaited<ReturnType<typeof readCurrentManual>> | undefined

  try {
    current = await readCurrentManual()
  } catch (error) {
    if (!isMissingFileError(error) && !isBundledManualMissing(error)) {
      throw error
    }
  }

  const candidates = options.sourceUrl
    ? [options.sourceUrl]
    : buildCandidateUrls(current?.metadata)

  for (const candidateUrl of candidates) {
    let candidate: CandidateDetails | null
    try {
      candidate = await inspectCandidate(candidateUrl)
    } catch (error) {
      if (options.sourceUrl) {
        throw error
      }
      console.warn(
        `[FTC manual updater] Could not check ${candidateUrl}`,
        error,
      )
      continue
    }

    if (!candidate) {
      continue
    }

    if (!options.force && current && isUnchanged(candidate, current.metadata)) {
      continue
    }

    const converted = await downloadAndConvert(candidate)
    if (
      current &&
      converted.metadata.seasonEndYear < current.metadata.seasonEndYear
    ) {
      continue
    }

    if (
      !options.force &&
      current &&
      converted.metadata.pdfSha256 === current.metadata.pdfSha256
    ) {
      continue
    }

    await writeManualAtomically(converted.markdown)
    return {
      updated: true,
      reason: `Installed the ${converted.metadata.season} competition manual`,
      metadata: converted.metadata,
    }
  }

  if (!current) {
    throw new Error('No official FTC competition manual could be downloaded')
  }

  return {
    updated: false,
    reason: 'The local competition manual is already current',
    metadata: current.metadata,
  }
}

export function startFtcManualUpdater(): void {
  if (process.env.FTC_MANUAL_AUTO_UPDATE?.toLowerCase() === 'false') {
    return
  }

  const globalState = globalThis as typeof globalThis & {
    ftcManualUpdateTimer?: NodeJS.Timeout
  }

  if (globalState.ftcManualUpdateTimer) {
    return
  }

  let updateRunning = false
  const runUpdate = async () => {
    if (updateRunning) {
      return
    }

    updateRunning = true
    try {
      await ensureManualFile()
      const result = await refreshFtcManual()
      if (result.updated) {
        console.info(`[FTC manual updater] ${result.reason}`)
      }
    } catch (error) {
      console.error('[FTC manual updater] Update failed', error)
    } finally {
      updateRunning = false
    }
  }

  void runUpdate()
  const timer = setInterval(() => void runUpdate(), MANUAL_UPDATE_INTERVAL_MS)
  timer.unref()
  globalState.ftcManualUpdateTimer = timer
}

function buildCandidateUrls(metadata?: ManualMetadata): string[] {
  const urls: string[] = []

  if (metadata?.source) {
    urls.push(metadata.source)
  }

  const currentYear = new Date().getUTCFullYear()
  const firstFutureSeason = (metadata?.seasonEndYear ?? currentYear) + 1
  const furthestSeason = Math.max(currentYear + 2, firstFutureSeason)

  for (let year = furthestSeason; year >= firstFutureSeason; year -= 1) {
    urls.push(
      `https://ftc-resources.firstinspires.org/ftc/archive/${year}/game/manual`,
    )
  }

  urls.push(CURRENT_MANUAL_URL)
  return Array.from(new Set(urls))
}

async function inspectCandidate(url: string): Promise<CandidateDetails | null> {
  let response = await fetch(url, {
    method: 'HEAD',
    redirect: 'follow',
    headers: {
      Accept: 'application/pdf',
      'User-Agent': 'RollingRobotics-Sushi-FTC-Tutor/1.0',
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })

  if (response.status === 405 || response.status === 501) {
    response = await fetch(url, {
      redirect: 'follow',
      headers: {
        Accept: 'application/pdf',
        'User-Agent': 'RollingRobotics-Sushi-FTC-Tutor/1.0',
      },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
  }

  if (response.status === 404) {
    await response.body?.cancel()
    return null
  }
  if (!response.ok) {
    await response.body?.cancel()
    throw new Error(`FTC manual check failed with HTTP ${response.status}`)
  }

  const contentType = response.headers.get('content-type')?.toLowerCase() ?? ''
  if (!contentType.includes('application/pdf')) {
    await response.body?.cancel()
    return null
  }

  const contentLength = Number(response.headers.get('content-length') ?? 0)
  if (contentLength > MAX_PDF_BYTES) {
    await response.body?.cancel()
    throw new Error(`FTC manual is larger than ${MAX_PDF_BYTES} bytes`)
  }

  const details = {
    requestedUrl: url,
    resolvedUrl: response.url,
    etag: response.headers.get('etag') ?? '',
    lastModified: response.headers.get('last-modified') ?? '',
    contentLength,
  }
  await response.body?.cancel()
  return details
}

function isUnchanged(
  candidate: CandidateDetails,
  metadata: ManualMetadata,
): boolean {
  if (candidate.etag && metadata.etag) {
    return candidate.etag === metadata.etag
  }

  if (
    candidate.lastModified &&
    metadata.lastModified &&
    candidate.contentLength > 0 &&
    metadata.contentLength > 0
  ) {
    return (
      candidate.lastModified === metadata.lastModified &&
      candidate.contentLength === metadata.contentLength
    )
  }

  return candidate.resolvedUrl === metadata.source
}

async function downloadAndConvert(candidate: CandidateDetails): Promise<{
  metadata: ManualMetadata
  markdown: string
}> {
  const response = await fetch(candidate.requestedUrl, {
    redirect: 'follow',
    headers: {
      Accept: 'application/pdf',
      'User-Agent': 'RollingRobotics-Sushi-FTC-Tutor/1.0',
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`FTC manual download failed with HTTP ${response.status}`)
  }

  const bytes = new Uint8Array(await response.arrayBuffer())
  if (bytes.byteLength === 0 || bytes.byteLength > MAX_PDF_BYTES) {
    throw new Error('FTC manual download has an invalid size')
  }
  const contentLength = bytes.byteLength
  const pdfSha256 = createHash('sha256').update(bytes).digest('hex')

  const { extractText, getDocumentProxy } = await import('unpdf')
  const pdf = await getDocumentProxy(bytes, {
    maxImageSize: 16_777_216,
  })

  if (pdf.numPages === 0 || pdf.numPages > MAX_PAGES) {
    await destroyPdf(pdf)
    throw new Error(`FTC manual has an invalid page count: ${pdf.numPages}`)
  }

  let extracted: Awaited<ReturnType<typeof extractText>>
  try {
    extracted = await withTimeout(
      extractText(pdf, { mergePages: false }),
      EXTRACTION_TIMEOUT_MS,
      'FTC manual text extraction timed out',
    )
  } finally {
    await destroyPdf(pdf)
  }

  if (!Array.isArray(extracted.text)) {
    throw new Error('FTC manual extraction did not return page text')
  }

  const pages = extracted.text.map(cleanPageText)
  const seasonEndYear = detectSeasonEndYear(
    pages.slice(0, 8).join('\n'),
    candidate.requestedUrl,
  )
  const season = `${seasonEndYear - 1}-${seasonEndYear}`
  const title = `FIRST Tech Challenge ${season} Competition Manual`
  const metadata: ManualMetadata = {
    title,
    season,
    seasonEndYear,
    source: response.url,
    downloadedAt: new Date().toISOString(),
    etag: response.headers.get('etag') ?? candidate.etag,
    lastModified:
      response.headers.get('last-modified') ?? candidate.lastModified,
    contentLength,
    pdfSha256,
    pages: extracted.totalPages,
  }

  return {
    metadata,
    markdown: buildMarkdown(metadata, pages),
  }
}

function detectSeasonEndYear(text: string, sourceUrl: string): number {
  const seasonMatch = text.match(/20\d{2}\s*[-\u2013\u2014]\s*(20\d{2})/)
  if (seasonMatch) {
    return Number(seasonMatch[1])
  }

  const archiveMatch = sourceUrl.match(/\/archive\/(20\d{2})\//)
  if (archiveMatch) {
    return Number(archiveMatch[1])
  }

  throw new Error('Could not determine the FTC manual season')
}

function cleanPageText(text: string): string {
  return text
    .replace(/\u0000/g, '')
    .replace(/\u00ad/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trimEnd())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function buildMarkdown(metadata: ManualMetadata, pages: string[]): string {
  const frontMatter = [
    '---',
    `title: ${JSON.stringify(metadata.title)}`,
    `season: ${JSON.stringify(metadata.season)}`,
    `seasonEndYear: ${metadata.seasonEndYear}`,
    `source: ${JSON.stringify(metadata.source)}`,
    `downloadedAt: ${JSON.stringify(metadata.downloadedAt)}`,
    `etag: ${JSON.stringify(metadata.etag)}`,
    `lastModified: ${JSON.stringify(metadata.lastModified)}`,
    `contentLength: ${metadata.contentLength}`,
    `pdfSha256: ${JSON.stringify(metadata.pdfSha256)}`,
    `pages: ${metadata.pages}`,
    '---',
  ]

  const body = pages
    .map((page, index) => `## Page ${index + 1}\n\n${page}`)
    .join('\n\n')

  return [
    ...frontMatter,
    '',
    `# ${metadata.title}`,
    '',
    `> Automatically converted from the [official FIRST PDF](${metadata.source}). The official PDF and FIRST Q&A system take precedence over this text extraction.`,
    '',
    body,
    '',
  ].join('\n')
}

async function writeManualAtomically(markdown: string): Promise<void> {
  const manualPath = getManualPath()
  await mkdir(path.dirname(manualPath), { recursive: true })

  const temporaryPath = `${manualPath}.${process.pid}.${Date.now()}.tmp`
  await writeFile(temporaryPath, markdown, 'utf8')
  await rename(temporaryPath, manualPath)

  const writtenFile = await stat(manualPath)
  if (writtenFile.size === 0) {
    throw new Error('FTC manual update produced an empty file')
  }
}

async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  message: string,
): Promise<T> {
  let timer: NodeJS.Timeout | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), timeoutMs)
  })

  try {
    return await Promise.race([promise, timeout])
  } finally {
    if (timer) {
      clearTimeout(timer)
    }
  }
}

async function destroyPdf(pdf: unknown): Promise<void> {
  if (!pdf || typeof pdf !== 'object' || !('destroy' in pdf)) {
    return
  }

  const destroy = (pdf as { destroy?: unknown }).destroy
  if (typeof destroy === 'function') {
    await destroy.call(pdf)
  }
}

function isMissingFileError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT'
}

function isBundledManualMissing(error: unknown): boolean {
  return error instanceof Error && error.message.startsWith('FTC manual is missing')
}
