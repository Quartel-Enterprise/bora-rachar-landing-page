import { ExplanationCard } from './explanation-card'
import { SpacingWrapper } from './spacing-wrapper'

export function HowToPayDebt() {
  return (
    <SpacingWrapper>
      <h2 className="mb-11 text-4xl font-medium md:mb-16">
        Como Pagar uma Dívida?
      </h2>

      <ExplanationCard
        step={1}
        title="Visualize suas Contas"
        description="Quando você tem contas ativas, elas estarão disponíveis com os métodos de pagamento definidos pelo criador da conta."
        reverse
        secondary
      />
    </SpacingWrapper>
  )
}
