import { apiFetch } from '@/api/client';
import type { NflGame } from '@/nfl/api/types';

const BASE_URL = 'api/nfl';

export function getNflGames(week?: number): Promise<NflGame[]> {
  const params = new URLSearchParams();

  if (week !== undefined) {
    params.set('week', String(week));
  }

  const query = params.toString();
  const url = `${BASE_URL}/games${query ? `?${query}` : ''}`;

  return apiFetch<NflGame[]>(url);
}