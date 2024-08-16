import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HowToCreateDebt } from '@/components/how-to-create-debt'
import { HowToPayDebt } from '@/components/how-to-pay-debt'
import { Welcome } from '@/components/welcome'

export default function Home() {
  return (
    <div className="font-roboto">
      <Header />
      <Welcome />
      <HowToCreateDebt />
      <HowToPayDebt />
      {/* <Roadmap /> */}
      {/* <TakePart /> */}
      <Footer />
    </div>
  )
}
