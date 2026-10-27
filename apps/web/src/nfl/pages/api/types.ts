export type NflGameStatus = 'scheduled' | 'live' | 'final';

export interface NflTeam {
  id: string;
  name: string;
  abbreviation: string;
  logo: string | null;
}

export interface NflGame {
  id: string;
  kickoff: string;
  status: NflGameStatus;
  homeTeam: NflTeam;
  awayTeam: NflTeam;
  homeScore: number | null;
  awayScore: number | null;
}