'use client'

import { useDevice } from '@/hooks/use-device'

export function ResponsiveSwitcher({
  mobile,
  tablet,
  desktop,
}: {
  mobile: React.ReactNode
  tablet?: React.ReactNode
  desktop: React.ReactNode
}) {
  const { isMobile, isTablet } = useDevice()
  if (isMobile) return <>{mobile}</>
  if (isTablet) return <>{tablet ?? desktop}</>
  return <>{desktop}</>
}
