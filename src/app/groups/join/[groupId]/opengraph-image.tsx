import { ImageResponse } from 'next/og'

import { api } from '@/data/api'
import { Group } from '@/data/types/group'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getGroupData(groupId: string): Promise<Group> {
  const response = await api(`/groups/${groupId}`, {
    next: {
      revalidate: 60 * 15, // 15 minutes
    },
  })

  const group = await response.json()

  return group
}

export default async function OgImage({
  params,
}: {
  params: { groupId: string }
}) {
  const group = await getGroupData(params.groupId)

  return new ImageResponse(
    (
      <div
        style={{
          background: 'gray',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={group.photo} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
