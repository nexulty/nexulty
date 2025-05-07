import AdminSigninForm from '@/components/forms/admin-signin-form'
import { getUser } from '@/queries/cached'
import { Ticket } from 'lucide-react'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await getUser()

  if (user) {
    return redirect('/')
  }

  return (
    <div className='bg-muted/50 flex size-full items-center justify-center'>
      <div className='bg-background rounded-lg border p-8 shadow-lg'>
        <div className='flex items-center gap-2'>
          <div className='border-primary from-primary shadow-[inset_0_1px_0_0_theme(colors.primary-foreground/15%)] flex size-7 items-center justify-center rounded-md border bg-gradient-to-t to-blue-500'>
            <Ticket className='size-3.5 text-white' />
          </div>
          <h2 className='text-lg font-semibold tracking-tight'>Admin</h2>
        </div>
        <div className='mt-4 mb-8'>
          <h1 className='text-xl font-semibold tracking-tight'>
            Welcome back!
          </h1>
          <p className='text-muted-foreground text-sm'>
            Sign in to your account to continue
          </p>
        </div>
        <AdminSigninForm />
      </div>
    </div>
  )
}
