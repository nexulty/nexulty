import { PUBLIC_ORGANIZATION_ROUTES } from '@/lib/constants'
import { User } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export default function OrganizationMiddleware(
  request: NextRequest,
  user: User | null,
  response: NextResponse,
) {
  const url = request.nextUrl
  const path = url.pathname
  const searchParams = url.searchParams.toString()
  const fullPath = `${path}${searchParams.length > 0 ? `?${searchParams}` : ''}`
  const host = request.headers.get('host')!

  if (!user && !PUBLIC_ORGANIZATION_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL(`/signin`, request.url))
  }

  response = NextResponse.rewrite(new URL(`/${host}${fullPath}`, request.url))

  return response
}
