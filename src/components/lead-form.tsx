'use client'

import { useEffect } from 'react'
import { useFormState } from 'react-dom'

import {
  createFirestoreLead,
  CreateFirestoreLeadActionState,
} from '@/actions/create-firestore-lead'
import useAmplitudeContext from '@/hooks/useAmplitudeContext'

import { InputValidationMessage } from './input-validation-message'
import { LeadFormSubmitButton } from './lead-form-submit-button'

export function LeadForm({ origin }: { origin: string }) {
  const { trackAmplitudeEvent } = useAmplitudeContext()
  const [formState, createFirestoreLeadAction] = useFormState(
    createFirestoreLead,
    {} as CreateFirestoreLeadActionState,
  )

  useEffect(() => {
    if (formState?.success) {
      trackAmplitudeEvent('lead_form_success')
    }
    if (formState?.error?.email) {
      trackAmplitudeEvent('lead_form_error', {
        message: formState.error.email[0],
      })
    }
  }, [trackAmplitudeEvent, formState?.success, formState?.error?.email])

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

      <LeadFormSubmitButton origin={origin} />

      {formState?.error?.email && (
        <InputValidationMessage message={formState.error.email[0]} error />
      )}
      {formState?.success && (
        <InputValidationMessage message="Obrigado! Em breve entraremos em contato" />
      )}
    </form>
  )
}
