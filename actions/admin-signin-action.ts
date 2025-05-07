'use server'

import { actionClient } from '@/lib/clients/action-client'
import { supabaseServerClient } from '@/lib/clients/supabase/server'
import { adminSigninSchema } from '@/schemas'
import { revalidateTag } from 'next/cache'

export const adminSigninAction = actionClient
  .metadata({
    name: 'admin-signin-action',
  })
  .schema(adminSigninSchema)
  .action(async ({ parsedInput }) => {
    const { email, password } = parsedInput

    const supabase = await supabaseServerClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    revalidateTag(`user-${data.user.id}`)
  })
