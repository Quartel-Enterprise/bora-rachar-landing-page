import Image from 'next/image'

import { FriendSharingBill } from '@/assets/amigos-dividindo-conta'

import { LeadForm } from './lead-form'
import { SpacingWrapper } from './spacing-wrapper'

export function Welcome() {
  return (
    <div className="flex h-[calc(100vh-82px)] items-center bg-gradient-to-br from-secondary to-logo">
      <SpacingWrapper className="flex items-center justify-between gap-24">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-5xl font-bold text-white">
            A melhor maneira de dividir contas com os amigos
          </h1>

          <p className="max-w-xl text-lg text-white">
            Faça parte da inovação na maneira de dividir suas contas e entre
            para fila de espera
          </p>

          <LeadForm />
        </div>

        <Image
          className="hidden"
          src="/amigos-dividindo-conta.png"
          width={472}
          height={378}
          quality={100}
          alt="Desenho de amigos dividindo conta com celular"
        />

        <FriendSharingBill className="hidden lg:block" />
      </SpacingWrapper>
    </div>
  )
}
