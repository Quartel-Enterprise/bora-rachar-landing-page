import { ExplanationCard } from './explanation-card'
import { SpacingWrapper } from './spacing-wrapper'

export function HowToCreateDebt() {
  return (
    <div id="how_it_work">
      <SpacingWrapper>
        <h2 className="mb-11 text-4xl font-medium md:mb-16">
          Como Criar uma Dívida?
        </h2>

        <div className="flex flex-col gap-6 md:gap-12">
          <ExplanationCard
            step={1}
            image="/criar-novo-grupo.webp"
            title="Crie seu Grupo"
            description="Dentro do Bora Rachar é possível criar grupos, em que ficarão concentrados os seus gastos e dos seus amigos."
            secondary
          />

          <ExplanationCard
            step={2}
            image="/convidar-amigos.webp"
            title="Convide seus Amigos"
            description="Ao criar um grupo, você poderá convidar seus amigos para participar."
            secondary
            reverse
          />

          <ExplanationCard
            step={3}
            image="/rachar-conta.webp"
            title="Dívida suas Contas"
            description="Agora é só cadastrar as suas contas para dividir entre os participantes do grupo da maneira que preferir!"
            secondary
          />
        </div>
      </SpacingWrapper>
    </div>
  )
}
