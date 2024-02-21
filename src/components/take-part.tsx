import { LeadForm } from './lead-form'
import { SpacingWrapper } from './spacing-wrapper'

export function TakePart() {
  return (
    <div className="bg-primary" id="register">
      <SpacingWrapper className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold text-white">Faça Parte</h2>
        <p className="text-lg text-white">
          Entre para fila de espera para ser informado quando lançarmos nossa
          primeira versão!
        </p>

        <LeadForm origin="take-part" />
      </SpacingWrapper>
    </div>
  )
}
