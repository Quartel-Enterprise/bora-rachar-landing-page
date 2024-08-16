'use client'
import { Smartphone } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { env } from '@/env'
import useAmplitudeContext from '@/hooks/useAmplitudeContext'

export function DownloadAndroidApkButton() {
  const { trackAmplitudeEvent } = useAmplitudeContext()
  const t = useTranslations('LandingPageWelcome')

  return (
    <div>
      <a
        href={env.NEXT_PUBLIC_DIRECT_DOWNLOAD_ANDROID_URL}
        onClick={() =>
          trackAmplitudeEvent('download_android_apk_beta', {
            version: 'beta_0.0.0',
          })
        }
        className="mt-3 flex justify-center rounded-lg bg-tertiary px-8 py-3 font-bold text-white sm:mt-6 md:inline-flex"
      >
        <Smartphone className="mr-2 h-6 w-6" />
        {t('downloadAPKButton')}
      </a>
    </div>
  )
}
