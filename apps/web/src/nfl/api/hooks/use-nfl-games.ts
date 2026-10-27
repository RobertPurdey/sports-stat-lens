import { useQuery } from '@tanstack/react-query';
import { getNflGames } from '@/nfl/api/games';

export function useNflGames() {
  return useQuery({
    queryKey: ['nfl', 'games'],
    queryFn: getNflGames
  })
}