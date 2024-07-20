import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.API_BASE_URL
  const url = new URL(path, baseUrl)

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.API_TOKEN}`,
      ...init?.headers,
    },
  })
}
