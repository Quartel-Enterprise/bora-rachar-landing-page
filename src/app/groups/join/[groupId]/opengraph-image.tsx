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

export async function getGroup(groupId: string): Promise<Group> {
  const response = await api(`/groups/${groupId}`, {
    next: {
      revalidate: 60 * 60, // 1 hours
    },
  })

  const group = await response.json()

  return group
}

export async function generateMetadata({
  params,
}: {
  params: { groupId: string }
}) {
  const group = await getGroup(params.groupId)

  return {
    title: `Junte-se ao grupo ${group.name} no Bora Rachar!`,
    description: `Junte-se com ${group.invitedBy.name} ao grupo ${group.name} e comece a dividir experiências!`,
    openGraph: {
      images: [group.photo],
    },
  }
}

export default async function Image({
  params,
}: {
  params: { groupId: string }
}) {
  const group = await getGroup(params.groupId)
  console.log(group)

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
