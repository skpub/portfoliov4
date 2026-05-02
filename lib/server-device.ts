import { headers } from 'next/headers'
import { detectDevice } from '@/lib/device'
import type { DeviceType } from '@/lib/device'

export async function getDevice(): Promise<DeviceType> {
  const ua = (await headers()).get('user-agent') ?? ''
  return detectDevice(ua)
}
