import { apiFetch } from '@/api/client';
import type { NflGame } from '@/api/nfl/types';

const BASE_URL = 'api/nfl/games';

export function getNflGames(): Promise<NflGame[]> {
  return apiFetch<NflGame[]>(`${BASE_URL}/games`);
}