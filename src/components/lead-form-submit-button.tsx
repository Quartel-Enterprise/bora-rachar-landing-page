'use client'

import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export function LeadFormSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="flex justify-center rounded-lg bg-tertiary px-8 py-3 font-bold text-white disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <Loader2 className="mx-[23px] h-6 w-6 animate-spin" />
      ) : (
        'Cadastrar'
      )}
    </button>
  )
}
