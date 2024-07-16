interface InvitedBy {
  name: string
  photo: string
}

export interface Group {
  name: string
  photo: string
  invitedBy: InvitedBy
}
