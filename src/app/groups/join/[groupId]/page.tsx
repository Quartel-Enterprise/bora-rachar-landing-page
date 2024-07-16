'use client'
import { useEffect } from 'react'

interface JoinGroupProps {
  params: {
    groupId: string
  }
}

export default function JoinGroup({ params }: JoinGroupProps) {
  useEffect(() => {
    const appUrl = `blitzsplit://groups/${params.groupId}`

    window.location.href = appUrl

    const timer = setTimeout(() => {
      if (!document.hidden) {
        window.location.href = '/'
      }
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [params.groupId])
}
