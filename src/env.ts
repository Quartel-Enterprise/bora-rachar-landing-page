import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    FIREBASE_API_KEY: z.string(),
    FIREBASE_AUTH_DOMAIN: z.string(),
    FIREBASE_PROJECT_ID: z.string(),
    FIREBASE_STORAGE_BUCKET: z.string(),
    FIREBASE_MESSAGING_SENDER_ID: z.string(),
    FIREBASE_APP_ID: z.string(),
    FIREBASE_MEASUREMENT_ID: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
