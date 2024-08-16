'use client'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/assets/logo'
import useAmplitudeContext from '@/hooks/useAmplitudeContext'

export default function LinkThree() {
  const { trackAmplitudeEvent } = useAmplitudeContext()

  function handleInstagramClick() {
    trackAmplitudeEvent('links_instagram_click', { page: 'links' })
  }

  function handleLinkedinClick() {
    trackAmplitudeEvent('links_linkedin_click', { page: 'links' })
  }

  function handleLandingPageClick() {
    trackAmplitudeEvent('links_landing_page_click', { page: 'links' })
  }

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 bg-slate-800 px-4 py-8">
      <div className="mb-4 flex items-center gap-4">
        <Logo />
        <div className="font-ubuntu text-lg text-white">Bora Rachar</div>
      </div>

      <Link
        href="https://www.instagram.com/appborarachar"
        className="flex h-14 w-full max-w-lg cursor-pointer items-center justify-center gap-4 rounded-lg border-[1px] px-2 py-3"
        target="_blank"
        onClick={handleInstagramClick}
      >
        <Instagram
          className="h-7 w-7 text-rose-600 opacity-75"
          strokeWidth={1}
        />
        <p className="text-white">Instagram</p>
      </Link>

      <Link
        href="https://www.linkedin.com/company/101887729"
        className="flex h-14 w-full max-w-lg cursor-pointer items-center justify-center gap-4 rounded-lg border-[1px] px-2 py-3"
        target="_blank"
        onClick={handleLinkedinClick}
      >
        <Linkedin
          className="h-7 w-7 text-blue-400 opacity-75"
          strokeWidth={1}
        />
        <p className="text-white">Linkedin</p>
      </Link>

      <Link
        href="/"
        className="flex h-14 w-full max-w-lg cursor-pointer items-center justify-center gap-4 rounded-lg border-[1px] px-2 py-3"
        onClick={handleLandingPageClick}
      >
        <p className="text-white">Conheça mais sobre o app</p>
      </Link>
    </div>
  )
}
