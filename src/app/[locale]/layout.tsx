import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server'

import { locales } from '@/utils/i18nConfig'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  unstableSetRequestLocale(locale)

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
