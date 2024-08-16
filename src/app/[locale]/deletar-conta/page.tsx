import { unstable_setRequestLocale as unstableSetRequestLocale } from 'next-intl/server'

import { ComponentLocaleProps } from '@/utils/i18nConfig'

export default function DeleteAccountInstructions({
  params: { locale },
}: ComponentLocaleProps) {
  unstableSetRequestLocale(locale)

  return (
    <div className="mx-auto flex max-w-4xl flex-col p-16">
      <h1 className="mb-4 text-4xl font-bold">Como deletar sua conta</h1>

      <p className="mb-4">
        Para solicitar a exclusão da sua conta e dos seus dados, por favor,
        envie um e-mail para{' '}
        <a
          href="mailto:appborarachar@gmail.com"
          className="text-blue-500 hover:underline"
        >
          appborarachar@gmail.com
        </a>{' '}
        com o assunto &quot;Solicitação de Exclusão de Conta&quot;.
      </p>

      <p className="mb-4">
        No corpo do e-mail, por favor, inclua as seguintes informações:
      </p>

      <ul className="mb-4 ml-6 list-disc">
        <li className="mb-2">Seu nome de usuário</li>
        <li className="mb-2">O endereço de e-mail associado à sua conta</li>
        <li className="mb-2">
          Uma breve confirmação de que você deseja deletar sua conta e seus
          dados
        </li>
      </ul>

      <p className="mb-4">
        Após recebermos sua solicitação, iremos processá-la o mais rápido
        possível. Você receberá um e-mail de confirmação quando sua conta e seus
        dados forem excluídos.
      </p>

      <p className="mb-4">
        Observe que, após a exclusão da sua conta, seus dados não poderão ser
        recuperados.
      </p>

      <p className="mb-4">
        Se você tiver alguma dúvida, entre em contato conosco pelo e-mail{' '}
        <a
          href="mailto:appborarachar@gmail.com"
          className="text-blue-500 hover:underline"
        >
          appborarachar@gmail.com
        </a>
        .
      </p>
    </div>
  )
}
