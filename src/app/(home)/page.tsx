import { Header } from '@/components/header'
import { HowToPayDebt } from '@/components/how-to-pay-debt'
import { Welcome } from '@/components/welcome'

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <HowToPayDebt />
    </>
  )
}
