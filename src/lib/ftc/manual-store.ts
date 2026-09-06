import { copyFile, mkdir, readFile, stat } from 'fs/promises'
import path from 'path'
import { scoreText } from './retrieval'
import type { ManualMetadata } from './types'

const MANUAL_FILE_NAME = 'ftc-game-manual.md'
const MAX_SECTION_LENGTH = 2_200
const MAX_CONTEXT_LENGTH = 14_000

interface ManualDocument {
  metadata: ManualMetadata
  markdown: string
}

interface ManualSection {
  page: number
  content: string
  score: number
}

let cachedDocument:
  | {
      path: string
      modifiedAt: number
      size: number
      document: ManualDocument
    }
  | undefined

function bundledManualPath(): string {
  return path.join(process.cwd(), 'data', MANUAL_FILE_NAME)
}

export function getManualPath(): string {
  const configuredPath = process.env.FTC_MANUAL_PATH?.trim()
  if (configuredPath) {
    return path.resolve(configuredPath)
  }

  const azureHome = process.env.WEBSITE_INSTANCE_ID
    ? process.env.HOME?.trim()
    : undefined

  if (azureHome) {
    return path.join(azureHome, 'data', 'rollingrobotics', MANUAL_FILE_NAME)
  }

  return bundledManualPath()
}

export async function ensureManualFile(): Promise<string> {
  const targetPath = getManualPath()

  try {
    await stat(targetPath)
    return targetPath
  } catch (error) {
    if (!isMissingFileError(error)) {
      throw error
    }
  }

  const sourcePath = bundledManualPath()
  if (path.resolve(sourcePath) === path.resolve(targetPath)) {
    throw new Error(`FTC manual is missing at ${targetPath}`)
  }

  await mkdir(path.dirname(targetPath), { recursive: true })
  await copyFile(sourcePath, targetPath)
  return targetPath
}

export async function readCurrentManual(): Promise<ManualDocument> {
  const manualPath = await ensureManualFile()
  const fileStat = await stat(manualPath)

  if (
    cachedDocument &&
    cachedDocument.path === manualPath &&
    cachedDocument.modifiedAt === fileStat.mtimeMs &&
    cachedDocument.size === fileStat.size
  ) {
    return cachedDocument.document
  }

  const markdown = await readFile(manualPath, 'utf8')
  const document = {
    metadata: parseManualMetadata(markdown),
    markdown,
  }

  cachedDocument = {
    path: manualPath,
    modifiedAt: fileStat.mtimeMs,
    size: fileStat.size,
    document,
  }

  return document
}

export function parseManualMetadata(markdown: string): ManualMetadata {
  const frontMatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!frontMatter) {
    throw new Error('FTC manual Markdown is missing metadata')
  }

  const values = new Map<string, string>()
  for (const line of frontMatter[1].split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator > 0) {
      values.set(line.slice(0, separator).trim(), line.slice(separator + 1).trim())
    }
  }

  const requiredString = (key: string): string => {
    const value = values.get(key)
    if (!value) {
      throw new Error(`FTC manual metadata is missing "${key}"`)
    }

    if (value.startsWith('"')) {
      const parsed: unknown = JSON.parse(value)
      if (typeof parsed !== 'string') {
        throw new Error(`FTC manual metadata "${key}" must be a string`)
      }
      return parsed
    }

    return value
  }

  const requiredNumber = (key: string): number => {
    const value = Number(requiredString(key))
    if (!Number.isFinite(value)) {
      throw new Error(`FTC manual metadata "${key}" must be a number`)
    }
    return value
  }

  return {
    title: requiredString('title'),
    season: requiredString('season'),
    seasonEndYear: requiredNumber('seasonEndYear'),
    source: requiredString('source'),
    downloadedAt: requiredString('downloadedAt'),
    etag: requiredString('etag'),
    lastModified: requiredString('lastModified'),
    contentLength: requiredNumber('contentLength'),
    pdfSha256: requiredString('pdfSha256'),
    pages: requiredNumber('pages'),
  }
}

export function retrieveManualContext(
  question: string,
  document: ManualDocument,
): string {
  const sections = splitManualIntoSections(document.markdown).map((section) => ({
    ...section,
    score: scoreText(question, section.content),
  }))

  sections.sort((left, right) => right.score - left.score || left.page - right.page)

  const relevantSections = sections.some((section) => section.score > 0)
    ? sections.filter((section) => section.score > 0)
    : sections

  const selected: ManualSection[] = []
  let totalLength = 0

  for (const section of relevantSections) {
    const formattedLength = section.content.length + 32
    if (
      selected.length >= 7 ||
      (selected.length > 0 && totalLength + formattedLength > MAX_CONTEXT_LENGTH)
    ) {
      break
    }
    selected.push(section)
    totalLength += formattedLength
  }

  return selected
    .sort((left, right) => left.page - right.page)
    .map((section) => `[Manual page ${section.page}]\n${section.content}`)
    .join('\n\n')
}

function splitManualIntoSections(markdown: string): ManualSection[] {
  const pageMatches = Array.from(markdown.matchAll(/^## Page (\d+)\s*$/gm))
  const sections: ManualSection[] = []

  for (let index = 0; index < pageMatches.length; index += 1) {
    const page = Number(pageMatches[index][1])
    const start = (pageMatches[index].index ?? 0) + pageMatches[index][0].length
    const end = pageMatches[index + 1]?.index ?? markdown.length
    const pageContent = markdown.slice(start, end).trim()

    for (const content of chunkText(pageContent, MAX_SECTION_LENGTH)) {
      if (content.length >= 40) {
        sections.push({ page, content, score: 0 })
      }
    }
  }

  if (sections.length === 0) {
    throw new Error('FTC manual Markdown does not contain any page sections')
  }

  return sections
}

function chunkText(text: string, maxLength: number): string[] {
  const chunks: string[] = []
  let remaining = text

  while (remaining.length > maxLength) {
    const candidate = remaining.slice(0, maxLength)
    const lineBreak = candidate.lastIndexOf('\n')
    const splitAt = lineBreak >= Math.floor(maxLength * 0.55) ? lineBreak : maxLength
    chunks.push(remaining.slice(0, splitAt).trim())
    remaining = remaining.slice(splitAt).trim()
  }

  if (remaining) {
    chunks.push(remaining)
  }

  return chunks
}

function isMissingFileError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT'
}
