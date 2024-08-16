import './globals.css'

import type { Metadata } from 'next'
import { Roboto, Ubuntu } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server'

import AmplitudeContextProvider from '@/context/amplitude'
import { locales } from '@/utils/i18nConfig'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700', '500'],
  display: 'swap',
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstableSetRequestLocale(locale)
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html className={`${roboto.variable} ${ubuntu.variable}`} lang={locale}>
      <body className="font-roboto antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AmplitudeContextProvider>{children}</AmplitudeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
