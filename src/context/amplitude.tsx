'use client'

import { init, track } from '@amplitude/analytics-browser'
import { createContext, useEffect } from 'react'

import { env } from '@/env'

const AMPLITUDE_API_KEY = env.NEXT_PUBLIC_AMPLITUDE_API_KEY

interface AmplitudeContextProps {
  trackAmplitudeEvent: (
    eventName: string,
    eventProperties?: { [key: string]: string },
  ) => void
}

export const AmplitudeContext = createContext<AmplitudeContextProps>({
  trackAmplitudeEvent: () => {},
})

function AmplitudeContextProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    init(AMPLITUDE_API_KEY, undefined, {
      defaultTracking: {
        formInteractions: false,
      },
    })
  }, [])

  const trackAmplitudeEvent = (
    eventName: string,
    eventProperties?: Record<string, string>,
  ) => {
    track(eventName, eventProperties)
  }

  const value = { trackAmplitudeEvent }

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  )
}

export default AmplitudeContextProvider
