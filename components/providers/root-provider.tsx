import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

type Props = {
  children: React.ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
      <Toaster />
    </>
  )
}
