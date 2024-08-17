import './globals.css'

import type { Metadata } from 'next'
import { Roboto, Ubuntu } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server'

import AmplitudeContextProvider from '@/context/amplitude'
import { ComponentLocaleProps, locales } from '@/utils/i18nConfig'

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

export async function generateMetadata({
  params: { locale },
}: ComponentLocaleProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    metadataBase: new URL(t('link')),
    openGraph: {
      images: [t('ogImage')],
    },
  }
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
