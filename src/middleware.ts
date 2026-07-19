import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Content Security Policy.
// This neutralizes injected script loaders (e.g. `eval(atob(...))` "EtherHiding"
// malware) at two points:
//   - no 'unsafe-eval'  -> blocks eval()/new Function()
//   - connect-src 'self' -> blocks fetch/XHR/WebSocket to attacker endpoints
// 'unsafe-inline' is required for Next.js's inline hydration scripts on
// statically prerendered pages; the two protections above are what stop the
// payload from executing, so keeping it is safe here.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Force browsers to revalidate cached content and clear locally persisted
  // artifacts. "storage" also unregisters any rogue service worker that a prior
  // compromise may have installed, which "cache" alone does not remove.
  // NOTE: this is incident-response hardening; relax to '"cache"' or remove once
  // visitors have been cleaned to avoid clearing site data on every request.
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  response.headers.set('Clear-Site-Data', '"cache", "storage"')

  // Security headers
  response.headers.set('Content-Security-Policy', contentSecurityPolicy)
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  )

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
