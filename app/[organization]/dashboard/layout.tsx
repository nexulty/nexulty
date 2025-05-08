import DashboardSidebar from '@/components/sidebars/dashboard-sidebar'
import { getDomain } from '@/utils'
import { Suspense } from 'react'

type Props = {
  children: React.ReactNode
  params: Promise<{ organization: string }>
}

export default async function DashboardLayout({ children, params }: Props) {
  const { organization } = await params
  const domain = getDomain(organization)

  return (
    <div className='flex size-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardSidebar domain={domain} />
      </Suspense>
      {children}
    </div>
  )
}
