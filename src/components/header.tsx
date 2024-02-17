'use client'

import { Logo } from '@/assets/logo'

export function Header() {
  function handleNavClick(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex items-center justify-between px-4 py-3.5 md:px-8">
      <div className="flex items-center gap-4">
        <Logo />
        <div className="font-ubuntu text-lg">Bora Rachar</div>
      </div>

      <div className="flex items-center gap-6">
        <a
          onClick={() => handleNavClick('como_funciona')}
          className="hidden cursor-pointer sm:flex"
        >
          Como Funciona
        </a>
        <a
          onClick={() => handleNavClick('inovacao')}
          className="hidden cursor-pointer sm:flex"
        >
          Inovação
        </a>
        <a
          onClick={() => handleNavClick('inscreva_se')}
          className="cursor-pointer rounded-lg bg-black px-6 py-2.5 font-bold text-white"
        >
          Inscreva-se
        </a>
      </div>
    </div>
  )
}
