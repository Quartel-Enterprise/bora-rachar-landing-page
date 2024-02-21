import './globals.css'

import type { Metadata } from 'next'
import { Roboto, Ubuntu } from 'next/font/google'

import AmplitudeContextProvider from '@/context/amplitude'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700', '500'],
})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Bora Rachar',
  description: 'Rache contas e experiências',
  metadataBase: new URL('https://borarachar.com/'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${roboto.variable} ${ubuntu.variable}`} lang="pt-BR">
      <body className="font-roboto antialiased">
        <AmplitudeContextProvider>{children}</AmplitudeContextProvider>
      </body>
    </html>
  )
}
