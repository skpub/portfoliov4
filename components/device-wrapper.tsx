import { headers } from 'next/headers'
import { detectDevice } from '@/lib/device'
import { DeviceProvider } from '@/components/device-provider'

export async function DeviceWrapper({ children }: { children: React.ReactNode }) {
  const ua = (await headers()).get('user-agent') ?? ''
  const device = detectDevice(ua)

  return <DeviceProvider device={device}>{children}</DeviceProvider>
}
