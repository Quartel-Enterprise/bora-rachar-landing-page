import { useTranslations } from 'next-intl'

import { ExplanationCard } from './explanation-card'
import { SpacingWrapper } from './spacing-wrapper'

export function HowToPayDebt() {
  const t = useTranslations('LandingPageHowToPayDebt')

  return (
    <SpacingWrapper className="bg-primary">
      <h2 className="mb-11 text-4xl font-medium text-white md:mb-16">
        {t('title')}
      </h2>

      <ExplanationCard
        step={1}
        title={t('card1Title')}
        description={t('card1Description')}
        image="/visualizar-conta-em-grupo.webp"
        reverse
        credit={
          <>
            <a href="https://br.freepik.com/fotos-gratis/jovem-se-exercitando-no-ginasio-de-escalada-indoor_27221880.htm#query=escalada&position=13&from_view=search&track=sph&uuid=f98001e1-298c-4f93-b491-f709ba0fae30">
              Foto de viarprodesign
            </a>{' '}
            no Freepik
          </>
        }
      />
    </SpacingWrapper>
  )
}
