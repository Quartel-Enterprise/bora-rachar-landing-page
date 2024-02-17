import { Header } from '@/components/header'
import { HowToCreateDebt } from '@/components/how-to-create-debt'
import { HowToPayDebt } from '@/components/how-to-pay-debt'
import { Roadmap } from '@/components/roadmap'
import { TakePart } from '@/components/take-part'
import { Welcome } from '@/components/welcome'

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <HowToPayDebt />
      <HowToCreateDebt />
      <Roadmap />
      <TakePart />
    </>
  )
}
