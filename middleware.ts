import { supabaseMiddlewareClient } from '@/lib/clients/supabase/middleware'
import { env } from '@/lib/env'
import AdminMiddleware from '@/lib/middlewares/admin-middleware'
import HomeMiddleware from '@/lib/middlewares/home-middleware'
import OrganizationMiddleware from '@/lib/middlewares/organization-middleware'
import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host')!

  const isHomeRoute =
    host === env.NEXT_PUBLIC_ROOT_DOMAIN ||
    host === `www.${env.NEXT_PUBLIC_ROOT_DOMAIN}`

  const isAdminRoute = host === `admin.${env.NEXT_PUBLIC_ROOT_DOMAIN}`

  if (isHomeRoute) {
    return HomeMiddleware(request)
  }

  const { user, response } = await supabaseMiddlewareClient(request)

  if (isAdminRoute) {
    return AdminMiddleware(request, user, response)
  }

  return OrganizationMiddleware(request, user, response)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
