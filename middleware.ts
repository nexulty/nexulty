import { env } from '@/lib/env'
import HomeMiddleware from '@/lib/middlewares/home-middleware'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host')!

  const isHomeRoute =
    host === env.NEXT_PUBLIC_ROOT_DOMAIN ||
    host === `www.${env.NEXT_PUBLIC_ROOT_DOMAIN}`

  if (isHomeRoute) {
    return HomeMiddleware(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
