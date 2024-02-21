import { ExplanationCard } from './explanation-card'
import { SpacingWrapper } from './spacing-wrapper'

export function HowToPayDebt() {
  return (
    <SpacingWrapper id="how_it_work">
      <h2 className="mb-11 text-4xl font-medium md:mb-16">
        Como Pagar uma Dívida?
      </h2>

      <ExplanationCard
        step={1}
        title="Visualize suas Contas"
        description="Quando você tem contas ativas, elas estarão disponíveis com os métodos de pagamento definidos pelo criador da conta."
        image="/visualizar-conta-em-grupo.webp"
        reverse
        secondary
        credit={
          <>
            <a href="https://br.freepik.com/fotos-gratis/jovem-se-exercitando-no-ginasio-de-escalada-indoor_27221880.htm#query=escalada&position=13&from_view=search&track=sph&uuid=f98001e1-298c-4f93-b491-f709ba0fae30">
              Foto de viarprodesign
            </a>{' '}
            no Freepik
          </>
        }
      />
    </SpacingWrapper>
  )
}
