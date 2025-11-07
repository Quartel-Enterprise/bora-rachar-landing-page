import { locales } from '@/utils/i18nConfig';
import { defineRouting } from 'next-intl/routing';
 
export const routing = defineRouting({
  locales,
  defaultLocale: 'pt'
});