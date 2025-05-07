import { env } from '@/lib/env'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDomain(organization: string) {
  return organization.replace(`.${env.NEXT_PUBLIC_ROOT_DOMAIN}`, '')
}
