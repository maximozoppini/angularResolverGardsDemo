export interface Team{
  id: number;
  name: string;
  description: string;
  participants: number;
}

export interface ResolvedTeam{
  teams: Team[];
  errors?: any;
}
