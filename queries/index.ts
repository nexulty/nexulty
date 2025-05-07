import { Supabase } from '@/types'

// user

export async function getUserQuery(supabase: Supabase, userId: string) {
  const { data } = await supabase
    .from('users')
    .select(
      `
        *
      `,
    )
    .eq('id', userId)
    .maybeSingle()
    .throwOnError()

  return data
}

export async function getOrganizationUserQuery(
  supabase: Supabase,
  domain: string,
  userId: string,
) {
  const { data } = await supabase
    .from('users')
    .select(
      `
        *,
        organization:organizations!inner(domain)
      `,
    )
    .eq('organization.domain', domain)
    .eq('id', userId)
    .maybeSingle()
    .throwOnError()

  return data
}
