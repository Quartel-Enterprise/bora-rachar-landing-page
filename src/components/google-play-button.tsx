'use client'
import { Play } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { env } from '@/env'
import useAmplitudeContext from '@/hooks/useAmplitudeContext'

export function GooglePlayButton() {
  const { trackAmplitudeEvent } = useAmplitudeContext()
  const t = useTranslations('LandingPageWelcome')

  return (
    <div>
      <a
        href={env.NEXT_PUBLIC_PLAYSTORE_URL}
        target="_blank"
        onClick={() => trackAmplitudeEvent('google_play_button_clicked')}
        className="mt-0 flex w-full justify-center rounded-lg bg-tertiary px-8 py-3 font-bold text-white sm:mt-6"
      >
        <Play className="mr-2 h-6 w-6" />
        {t('googlePlayButton')}
      </a>
    </div>
  )
}
