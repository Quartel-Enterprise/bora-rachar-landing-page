import { useTranslations } from 'next-intl'

import { FriendSharingBill } from '@/assets/amigos-dividindo-conta'

import { GooglePlayButton } from './google-play-button'
import { SpacingWrapper } from './spacing-wrapper'

export function Welcome() {
  const t = useTranslations('LandingPageWelcome')

  return (
    <div className="flex h-[calc(100vh-82px)] min-h-[640px] items-center bg-gradient-to-br from-secondary to-logo">
      <SpacingWrapper className="flex items-center justify-between gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-5xl font-bold text-white">
            {t('title')}
          </h1>

          <p className="max-w-xl text-lg text-white">
            {t.rich('description', {
              sendReport: (chunk) => (
                <a
                  href="https://forms.gle/uEHzeAAJEkoxZ6GQ8"
                  target="__blank"
                  className="underline"
                >
                  {chunk}
                </a>
              ),
            })}
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <GooglePlayButton />
          </div>
        </div>

        <div className="hidden flex-col lg:flex">
          <FriendSharingBill />
          <span className="text-end text-xs text-white opacity-40">
            <a
              target="_blank"
              href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-conta_5354443.htm"
            >
              Imagem de storyset
            </a>{' '}
            no Freepik
          </span>
        </div>
      </SpacingWrapper>
    </div>
  )
}
