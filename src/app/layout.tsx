import './globals.css'

import type { Metadata } from 'next'
import { Roboto, Ubuntu } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Bora Rachar',
  description: 'Rache contas e experiências',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${roboto.variable} ${ubuntu.variable}`} lang="pt-BR">
      <body className="font-roboto antialiased">{children}</body>
    </html>
  )
}
