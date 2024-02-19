'use client'

import { useFormState } from 'react-dom'

import {
  createFirestoreLead,
  CreateFirestoreLeadActionState,
} from '@/actions/create-firestore-lead'

import { InputValidationMessage } from './input-validation-message'
import { LeadFormSubmitButton } from './lead-form-submit-button'

export function LeadForm() {
  const [formState, createFirestoreLeadAction] = useFormState(
    createFirestoreLead,
    {} as CreateFirestoreLeadActionState,
  )

  const inputBorderColor = formState?.error?.email
    ? 'border-rose-500'
    : formState?.success
      ? 'border-secondary'
      : 'border-white'

  return (
    <form
      className="relative mt-6 flex w-full max-w-lg flex-col gap-4 xs:flex-row"
      action={createFirestoreLeadAction}
      noValidate
    >
      <input
        type="email"
        name="email"
        placeholder="Seu melhor e-mail"
        className={`${inputBorderColor} w-full rounded-lg border-[1px] bg-transparent px-4 py-3 text-white outline-0 placeholder:text-white`}
        autoComplete="email"
      />

      <LeadFormSubmitButton />

      {formState?.error?.email && (
        <InputValidationMessage message={formState.error.email[0]} error />
      )}
      {formState?.success && (
        <InputValidationMessage message="Obrigado!, em breve entraremos em contato" />
      )}
    </form>
  )
}
