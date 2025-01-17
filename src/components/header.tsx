'use client'

import { Instagram } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Logo } from '@/assets/logo'
import { env } from '@/env'
import useAmplitudeContext from '@/hooks/useAmplitudeContext'

export function Header() {
  const { trackAmplitudeEvent } = useAmplitudeContext()
  const t = useTranslations('LandingPageHeader')

  function handleNavClick(id: string) {
    trackAmplitudeEvent(`header_${id}_click`)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function handleInstagramClick() {
    trackAmplitudeEvent('header_instagram_click')
  }

  return (
    <div className="flex items-center justify-between px-4 py-3.5 md:px-8">
      <div className="flex items-center gap-4">
        <Logo />
        <div className="font-ubuntu text-lg">{t('title')}</div>

        <div className="mx-1 h-7 w-px bg-gray-300 xs:hidden sm:block" />

        <a
          href="https://instagram.com/appborarachar"
          target="_blank"
          onClick={handleInstagramClick}
        >
          <Instagram className="h-6 w-6 text-rose-600 opacity-75" />
        </a>
      </div>

      <div className="flex items-center gap-6">
        <nav
          onClick={() => handleNavClick('how_it_work')}
          className="hidden cursor-pointer sm:flex"
        >
          {t('howItWorks')}
        </nav>
        <a
          href={env.NEXT_PUBLIC_PLAYSTORE_URL}
          target="_blank"
          onClick={() => handleNavClick('download_app')}
          className="hidden cursor-pointer rounded-lg bg-primary px-6 py-2.5 font-bold text-white xs:block"
        >
          {t('downloadAPPButton')}
        </a>
      </div>
    </div>
  )
}
