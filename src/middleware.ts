import createMiddleware from 'next-intl/middleware'

import { locales } from '@/utils/i18nConfig'

export default createMiddleware({
  locales,
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
