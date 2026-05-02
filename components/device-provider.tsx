'use client'

import { createContext, useContext } from 'react'
import type { DeviceType } from '@/lib/device'

const DeviceContext = createContext<DeviceType>('desktop')

export function DeviceProvider({
  device,
  children,
}: {
  device: DeviceType
  children: React.ReactNode
}) {
  return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
}

export function useDeviceContext() {
  return useContext(DeviceContext)
}
