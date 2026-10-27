import { apiFetch } from '@/api/client';
import type { NflGame } from '@/nfl/api/types';

const BASE_URL = 'api/nfl';

export function getNflGames(): Promise<NflGame[]> {
  return apiFetch<NflGame[]>(`${BASE_URL}/games`);
}