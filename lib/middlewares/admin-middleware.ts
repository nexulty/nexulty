import { PUBLIC_ADMIN_ROUTES, VALID_ADMIN_ROUTES } from '@/lib/constants'
import { User } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export default function AdminMiddleware(
  request: NextRequest,
  user: User | null,
  response: NextResponse,
) {
  const url = request.nextUrl
  const path = url.pathname
  const searchParams = url.searchParams.toString()
  const fullPath = `${path}${searchParams.length > 0 ? `?${searchParams}` : ''}`

  if (!VALID_ADMIN_ROUTES.includes(path)) {
    return NextResponse.rewrite(new URL(`/nexulty/not-found`, request.url))
  }

  if (!user && !PUBLIC_ADMIN_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL(`/signin`, request.url))
  }

  response = NextResponse.rewrite(new URL(`/admin${fullPath}`, request.url))

  return response
}
