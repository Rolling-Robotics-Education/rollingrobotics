const WINDOW_MS = 10 * 60 * 1_000
const MAX_REQUESTS_PER_WINDOW = 20

interface RateLimitBucket {
  count: number
  resetAt: number
}

interface RateLimitResult {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
}

const globalState = globalThis as typeof globalThis & {
  ftcTutorRateLimits?: Map<string, RateLimitBucket>
}

const buckets =
  globalState.ftcTutorRateLimits ?? new Map<string, RateLimitBucket>()
globalState.ftcTutorRateLimits = buckets

export function checkTutorRateLimit(clientId: string): RateLimitResult {
  const now = Date.now()
  const existing = buckets.get(clientId)
  const bucket =
    !existing || existing.resetAt <= now
      ? { count: 0, resetAt: now + WINDOW_MS }
      : existing

  bucket.count += 1
  buckets.set(clientId, bucket)

  if (buckets.size > 5_000) {
    buckets.forEach((value, key) => {
      if (value.resetAt <= now) {
        buckets.delete(key)
      }
    })
  }

  return {
    allowed: bucket.count <= MAX_REQUESTS_PER_WINDOW,
    remaining: Math.max(MAX_REQUESTS_PER_WINDOW - bucket.count, 0),
    retryAfterSeconds: Math.max(
      Math.ceil((bucket.resetAt - now) / 1_000),
      1,
    ),
  }
}
