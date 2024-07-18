import { Smartphone } from 'lucide-react'

import { env } from '@/env'

export function DownloadAndroidApkButton() {
  return (
    <div>
      <a
        href={env.NEXT_PUBLIC_DIRECT_DOWNLOAD_ANDROID_URL}
        className="mt-6 flex justify-center rounded-lg bg-tertiary px-8 py-3 font-bold text-white md:inline-flex"
      >
        <Smartphone className="mr-2 h-6 w-6" />
        Download APP
      </a>
    </div>
  )
}
