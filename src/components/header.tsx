'use client'

import { Instagram } from 'lucide-react'

import { Logo } from '@/assets/logo'

export function Header() {
  function handleNavClick(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="flex items-center justify-between px-4 py-3.5 md:px-8">
      <div className="flex items-center gap-4">
        <Logo />
        <div className="font-ubuntu text-lg">Bora Rachar</div>

        <div className="xs:hidden mx-1 h-7 w-px bg-gray-300 sm:block" />

        <a href="https://instagram.com/appborarachar" target="_blank">
          <Instagram className="h-6 w-6 text-rose-600 opacity-75" />
        </a>
      </div>

      <div className="flex items-center gap-6">
        <nav
          onClick={() => handleNavClick('como_funciona')}
          className="hidden cursor-pointer sm:flex"
        >
          Como Funciona
        </nav>
        <nav
          onClick={() => handleNavClick('inovacao')}
          className="hidden cursor-pointer sm:flex"
        >
          Inovação
        </nav>
        <nav
          onClick={() => handleNavClick('inscreva_se')}
          className="xs:block hidden cursor-pointer rounded-lg bg-black px-6 py-2.5 font-bold text-white"
        >
          Inscreva-se
        </nav>
      </div>
    </header>
  )
}
