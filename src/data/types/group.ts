interface Group {
  id: string;
  name: string;
  imageUrl: string | null;
}

interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string | null;
}

export interface GroupResponse {
  group: Group;
  invitedBy: User;
  participants: User[];
  temporaryUsers: User[];
}
