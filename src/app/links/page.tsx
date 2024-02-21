import { Instagram } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/assets/logo'
import { LeadForm } from '@/components/lead-form'

export default function LinkThree() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 bg-slate-800 px-4 py-8">
      <div className="mb-4 flex items-center gap-4">
        <Logo />
        <div className="font-ubuntu text-lg text-white">Bora Rachar</div>
      </div>

      <Link
        href="https://www.instagram.com/appborarachar"
        className="flex h-14 w-full max-w-lg cursor-pointer items-center justify-center gap-4 rounded-lg border-[1px] px-2 py-3"
        target="_blank"
      >
        <Instagram
          className="h-7 w-7 text-rose-600 opacity-75"
          strokeWidth={1}
        />
        <p className="text-white">Instagram</p>
      </Link>

      <Link
        href="/"
        className="flex h-14 w-full max-w-lg cursor-pointer items-center justify-center gap-4 rounded-lg border-[1px] px-2 py-3"
      >
        <p className="text-white">Conheça mais sobre o app</p>
      </Link>

      <div className="mt-8 flex max-w-lg flex-col pb-2">
        <p className="mb-2 text-white xs:mb-0">
          Entre para fila de espera para ser informado quando lançarmos nossa
          primeira versão:
        </p>
        <LeadForm origin="links_page" />
      </div>
    </div>
  )
}
