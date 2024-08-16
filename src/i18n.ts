import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales } from '@/utils/i18nConfig'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
