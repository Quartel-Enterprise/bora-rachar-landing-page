export const locales = ['en', 'pt']

export interface ComponentLocaleProps {
  params: Promise<{locale: string}>;
}
