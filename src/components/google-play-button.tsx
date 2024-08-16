import { Play } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function GooglePlayButton() {
  const t = useTranslations('LandingPageWelcome')
  return (
    <div>
      <button
        disabled
        className="disabled mt-0 flex w-full justify-center rounded-lg bg-tertiary px-8 py-3 font-bold text-white opacity-70 sm:mt-6"
      >
        <Play className="mr-2 h-6 w-6" />
        {t('googlePlayButton')}
      </button>
    </div>
  )
}
