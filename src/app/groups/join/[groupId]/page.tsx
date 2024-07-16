import { api } from '@/data/api'
import { Group } from '@/data/types/group'

import OpenApp from './OpenApp'

export interface JoinGroupProps {
  params: {
    groupId: string
  }
}

async function getGroupData(groupId: string): Promise<Group> {
  const response = await api(`/landing-page/groups/${groupId}`, {
    next: {
      revalidate: 60 * 15, // 15 minutes
    },
  })

  const group = await response.json()

  return group
}

export async function generateMetadata({ params }: JoinGroupProps) {
  const group = await getGroupData(params.groupId)

  return {
    title: `Junte-se ao grupo ${group?.name} no Bora Rachar!`,
    description: `Junte-se com ${group?.invitedBy?.name} ao grupo ${group?.name} e comece a dividir contas e experiências!`,
  }
}

export default function JoinGroup({ params }: JoinGroupProps) {
  return <OpenApp groupId={params.groupId} />
}
