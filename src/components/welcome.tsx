import Image from 'next/image'

import { SpacingWrapper } from './spacing-wrapper'
import { LeadForm } from './lead-form'
import { FriendSharingBill } from '@/assets/amigos-dividindo-conta'

export function Welcome() {
  return (
    <div className="flex items-center h-[calc(100vh-82px)] bg-gradient-to-br from-secondary to-primary px-4 md:px-8">
      <SpacingWrapper className="flex items-center justify-between gap-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold max-w-2xl text-white">
            A melhor maneira de dividir contas com os amigos
          </h1>

          <p className="text-white text-lg max-w-xl">
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
