import { useQuery } from '@tanstack/react-query';
import { getNflGames } from '@/api/nfl/games';

export function useNflGames() {
  return useQuery({
    queryKey: ['nfl', 'games'],
    queryFn: getNflGames
  })
}