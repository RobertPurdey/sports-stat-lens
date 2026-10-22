import type { NflTeam } from './nfl-team.js';

export type NflGameStatus = 'scheduled' | 'live' | 'final';

export interface NflGame {
  id: string;
  kickoff: string;
  status: NflGameStatus;
  homeTeam: NflTeam;
  awayTeam: NflTeam;
  homeScore: number | null;
  awayScore: number | null;
}
