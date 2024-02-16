import Link from 'next/link'
import { Logo } from '@/assets/logo'

export function Header() {
  return (
    <div className="flex items-center justify-between py-3.5 px-4 md:px-8">
      <div className="flex items-center gap-4">
        <Logo />
        <div className="font-ubuntu text-lg">Bora Rachar</div>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#como_funciona" className="hidden sm:flex">
          Como Funciona
        </Link>
        <Link href="#inovacao" className="hidden sm:flex">
          Inovação
        </Link>
        <Link
          href="#faca_parte"
          className="bg-black text-white px-6 py-2.5 rounded-lg font-bold"
        >
          Inscreva-se
        </Link>
      </div>
    </div>
  )
}
