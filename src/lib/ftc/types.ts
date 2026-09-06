export type TutorRole = 'user' | 'assistant'

export interface TutorMessage {
  role: TutorRole
  content: string
}

export interface TutorSource {
  id: number
  title: string
  url: string
}

export interface TutorApiResponse {
  answer: string
  rejected: boolean
  sources: TutorSource[]
  manual: {
    season: string
    updatedAt: string
    url: string
  }
}

export interface GroundingSource extends TutorSource {
  content: string
}

export interface ManualMetadata {
  title: string
  season: string
  seasonEndYear: number
  source: string
  downloadedAt: string
  etag: string
  lastModified: string
  contentLength: number
  pdfSha256: string
  pages: number
}
