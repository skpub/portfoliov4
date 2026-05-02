export type DeviceType = 'mobile' | 'tablet' | 'desktop'

const MOBILE_UA = /Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i
const TABLET_UA = /iPad|Android(?!.*Mobile)|Tablet/i

export function detectDevice(ua: string): DeviceType {
  if (MOBILE_UA.test(ua)) return 'mobile'
  if (TABLET_UA.test(ua)) return 'tablet'
  return 'desktop'
}
