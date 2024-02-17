import { ExplanationCard } from './explanation-card'
import { SpacingWrapper } from './spacing-wrapper'

export function HowToCreateDebt() {
  return (
    <div className="bg-primary">
      <SpacingWrapper>
        <h2 className="mb-11 text-4xl font-medium text-white md:mb-16">
          Como Criar uma Dívida?
        </h2>

        <div className="flex flex-col gap-6 md:gap-12">
          <ExplanationCard
            step={1}
            title="Crie seu Grupo"
            description="Dentro do Bora Rachar é possível criar grupos, em que ficarão concentrados os seus gastos e dos seus amigos."
          />

          <ExplanationCard
            step={2}
            title="Convide seus Amigos"
            description="Ao criar um grupo, você poderá convidar seus amigos para participar."
            reverse
          />

          <ExplanationCard
            step={3}
            title="Dívida suas Contas"
            description="Agora é só cadastrar as suas contas para dividir entre os participantes do grupo da maneira que preferir!"
          />
        </div>
      </SpacingWrapper>
    </div>
  )
}
