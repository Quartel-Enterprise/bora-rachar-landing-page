import { useTranslations } from 'next-intl'

import { ExplanationCard } from './explanation-card'
import { SpacingWrapper } from './spacing-wrapper'

export function HowToCreateDebt() {
  const t = useTranslations('LandingPageHowToCreateDebt')

  return (
    <div id="how_it_work">
      <SpacingWrapper>
        <h2 className="mb-11 text-4xl font-medium md:mb-16">{t('title')}</h2>

        <div className="flex flex-col gap-6 md:gap-12">
          <ExplanationCard
            step={1}
            image="/criar-novo-grupo.webp"
            title={t('card1Title')}
            description={t('card1Description')}
            secondary
          />

          <ExplanationCard
            step={2}
            image="/convidar-amigos.webp"
            title={t('card2Title')}
            description={t('card2Description')}
            secondary
            reverse
          />

          <ExplanationCard
            step={3}
            image="/rachar-conta.webp"
            title={t('card3Title')}
            description={t('card3Description')}
            secondary
          />
        </div>
      </SpacingWrapper>
    </div>
  )
}
