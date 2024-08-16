import { unstable_setRequestLocale as unstableSetRequestLocale } from 'next-intl/server'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HowToCreateDebt } from '@/components/how-to-create-debt'
import { HowToPayDebt } from '@/components/how-to-pay-debt'
import { Welcome } from '@/components/welcome'
import { ComponentLocaleProps } from '@/utils/i18nConfig'

export default function Home({ params: { locale } }: ComponentLocaleProps) {
  unstableSetRequestLocale(locale)
  return (
    <>
      <Header />
      <Welcome />
      <HowToCreateDebt />
      <HowToPayDebt />
      {/* <Roadmap /> */}
      {/* <TakePart /> */}
      <Footer />
    </>
  )
}
