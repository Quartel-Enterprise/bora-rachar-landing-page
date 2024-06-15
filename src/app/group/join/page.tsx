'use client'
import { useEffect } from 'react'

export default function LinkThree() {
  useEffect(() => {
    const appUrl = 'blitzsplit://grupo/123'

    window.location.href = appUrl
  }, [])

  return <div></div>
}
