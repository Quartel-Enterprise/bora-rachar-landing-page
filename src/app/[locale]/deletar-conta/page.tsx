import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale as unstableSetRequestLocale } from 'next-intl/server'

import { ComponentLocaleProps } from '@/utils/i18nConfig'

export default function DeleteAccountInstructions({
  params: { locale },
}: ComponentLocaleProps) {
  unstableSetRequestLocale(locale)
  const t = useTranslations('DeleteAccount')

  return (
    <div className="mx-auto flex max-w-4xl flex-col p-16">
      <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>

      <p className="mb-4">
        {t.rich('requestInstructions', {
          email: (chunk) => (
            <a
              href="mailto:appborarachar@gmail.com"
              className="text-blue-500 hover:underline"
            >
              {chunk}
            </a>
          ),
        })}
      </p>

      <p className="mb-4">{t('emailInstructions')}</p>

      <ul className="mb-4 ml-6 list-disc">
        <li className="mb-2">{t('usernameInstruction')}</li>
        <li className="mb-2">{t('emailInstruction')}</li>
        <li className="mb-2">{t('confirmationInstruction')}</li>
      </ul>

      <p className="mb-4">{t('processingConfirmation')}</p>

      <p className="mb-4">{t('dataRecoveryWarning')}</p>

      <p className="mb-4">
        {t.rich('contactInformation', {
          email: (chunk) => (
            <a
              href="mailto:appborarachar@gmail.com"
              className="text-blue-600 hover:underline"
            >
              {chunk}
            </a>
          ),
        })}
      </p>
    </div>
  )
}
