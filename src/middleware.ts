import createMiddleware from 'next-intl/middleware'

import { locales } from '@/utils/i18nConfig'

export default createMiddleware({
  locales,
  defaultLocale: 'pt',
})

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/groups`, optionally with a locale prefix
    '/([\\w-]+)?/groups/(.+)',
  ],
}
