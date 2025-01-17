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
    API_BASE_URL: z.string(),
    API_TOKEN: z.string(),
  },
  clientPrefix: 'NEXT_PUBLIC_',
  client: {
    NEXT_PUBLIC_AMPLITUDE_API_KEY: z.string(),
    NEXT_PUBLIC_DIRECT_DOWNLOAD_ANDROID_URL: z.string(),
    NEXT_PUBLIC_PLAYSTORE_URL: z.string(),
  },
  runtimeEnv: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    NEXT_PUBLIC_AMPLITUDE_API_KEY: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
    NEXT_PUBLIC_DIRECT_DOWNLOAD_ANDROID_URL:
      process.env.NEXT_PUBLIC_DIRECT_DOWNLOAD_ANDROID_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    API_TOKEN: process.env.API_TOKEN,
    NEXT_PUBLIC_PLAYSTORE_URL: process.env.NEXT_PUBLIC_PLAYSTORE_URL,
  },
  emptyStringAsUndefined: true,
})
