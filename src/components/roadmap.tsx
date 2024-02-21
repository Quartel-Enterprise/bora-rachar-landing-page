import { MoveLeft } from 'lucide-react'
import Image from 'next/image'

import { SpacingWrapper } from './spacing-wrapper'

export function Roadmap() {
  return (
    <SpacingWrapper
      className="flex items-center justify-between gap-20"
      id="innovation"
    >
      <div className="flex flex-col gap-3">
        <h2 className="mb-8 text-4xl font-medium md:mb-11">É só isso?</h2>

        <p className="max-w-xl text-lg">Não! O nosso planejamento:</p>
        <ol className="flex flex-col gap-1">
          <li className="flex gap-2 text-black">
            <span className="flex items-center gap-1">
              1
              <div className="mr-0.5 h-1 w-1.5 bg-tertiary" />
            </span>
            Fazer o básico bem feito{' '}
            <span className="font-regular flex items-center self-center text-nowrap text-sm text-gray-500">
              <MoveLeft className="h-4 w-4" strokeWidth={1} /> estamos aqui!
            </span>
          </li>
          <li className="flex gap-2">
            <span className="flex items-center gap-1">
              2
              <div className="mr-0.5 h-1 w-1.5 bg-tertiary" />
            </span>
            Funcionalidades exclusivas e inovadoras
          </li>
        </ol>
      </div>

      <div className="hidden flex-col md:flex">
        <Image
          src="/olhando-para-o-futuro.webp"
          width={500}
          height={370}
          quality={100}
          alt="Trem amigas escalando uma montanha olhando para o destino"
        />
        <span className="text-end text-xs text-gray-600 opacity-40">
          Foto de{' '}
          <a
            target="_blank"
            href="https://unsplash.com/pt-br/@neom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            NEOM
          </a>{' '}
          na{' '}
          <a
            target="_blank"
            href="https://unsplash.com/pt-br/fotografias/um-grupo-de-pessoas-sentadas-em-cima-de-uma-rocha-LiDZooBvzt0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </span>
      </div>
    </SpacingWrapper>
  )
}
