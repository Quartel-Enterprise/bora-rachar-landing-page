import type { Metadata } from 'next'
import { Ubuntu, Roboto } from 'next/font/google'
import './globals.css'

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
      <body className="antialiased font-roboto">{children}</body>
    </html>
  )
}
