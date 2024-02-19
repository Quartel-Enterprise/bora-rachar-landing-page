'use server'

import { z } from 'zod'

import {
  addEmailToFirestore,
  emailAlreadyExistsInFirestore,
} from '@/data/firestore'

const schema = z.object({
  email: z
    .string()
    .min(1, 'É necessário informar um e-mail')
    .email('E-mail inválido'),
})

export interface CreateFirestoreLeadActionState {
  error?: {
    email?: string[]
  }
  success?: boolean
}

export async function createFirestoreLead(
  _: CreateFirestoreLeadActionState,
  formData: FormData,
) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      error: {
        email: validatedFields.error.flatten().fieldErrors.email,
      },
    }
  }

  const { email } = validatedFields.data

  if (await emailAlreadyExistsInFirestore(email)) {
    return {
      error: {
        email: ['E-mail já cadastrado'],
      },
    }
  }

  try {
    await addEmailToFirestore(email)

    return {
      success: true,
    }
  } catch (e) {
    return {
      error: {
        email: ['Erro ao cadastrar o e-mail, tente novamente mais tarde'],
      },
    }
  }
}
