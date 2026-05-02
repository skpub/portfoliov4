'use client'

import { useDeviceContext } from '@/components/device-provider'

export function useDevice() {
  const device = useDeviceContext()
  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  }
}
