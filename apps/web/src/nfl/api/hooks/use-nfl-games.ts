import { useQuery } from '@tanstack/react-query';
import { getNflGames } from '@/nfl/api/games';

export function useNflGames(week?: number) {
  return useQuery({
    queryKey: ['nfl', 'games', week],
    queryFn: () => getNflGames(week)
  })
}