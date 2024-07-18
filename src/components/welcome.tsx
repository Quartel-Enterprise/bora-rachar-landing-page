'use client'
import { useSearchParams } from 'next/navigation'

import { FriendSharingBill } from '@/assets/amigos-dividindo-conta'

import { DownloadAndroidApkButton } from './download-android-apk-button'
import { LeadForm } from './lead-form'
import { SpacingWrapper } from './spacing-wrapper'

export function Welcome() {
  const searchParams = useSearchParams()
  const isBetaTester = searchParams.get('beta_tester') === 'true'

  return (
    <div className="flex h-[calc(100vh-82px)] min-h-[640px] items-center bg-gradient-to-br from-secondary to-logo">
      <SpacingWrapper className="flex items-center justify-between gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-5xl font-bold text-white">
            A melhor maneira de dividir contas com os amigos
          </h1>
          <p className="max-w-xl text-lg text-white">
            Faça parte da inovação na maneira de dividir suas contas e entre
            para fila de espera
          </p>

          {isBetaTester ? (
            <DownloadAndroidApkButton />
          ) : (
            <LeadForm origin="welcome" />
          )}
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
