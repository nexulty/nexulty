import AdminSigninForm from '@/components/forms/admin-signin-form'
import { getUser } from '@/queries/cached'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await getUser()

  if (user) {
    return redirect('/')
  }

  return (
    <div className='flex size-full items-center justify-center'>
      <div className='rounded-lg border p-8 shadow-lg'>
        <div className='flex items-center gap-2'>
          <div className='bg-primary size-8 rounded-md' />
          <h2 className='text-2xl font-semibold tracking-tight'>Admin</h2>
        </div>
        <div className='mt-4 mb-8'>
          <h1 className='text-lg font-semibold tracking-tight'>
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
