import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Force browsers to revalidate cached content.
  // This ensures users who cached the compromised page will fetch the clean version.
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  response.headers.set('Clear-Site-Data', '"cache"')

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
