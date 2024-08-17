'use client'
import { useEffect } from 'react'

export default function OpenApp({ groupId }: { groupId: string }) {
  useEffect(() => {
    const appUrl = `blitzsplit://groups/${groupId}`

    window.location.href = appUrl

    const timer = setTimeout(() => {
      if (!document.hidden) {
        window.location.href = '/'
      }
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [groupId])

  return <></>
}
