
import { getScoreboard } from '#/modules/nfl/providers/espn/espn-provider.js';
import { mapEspnEventToNflGame } from '#/modules/nfl/services/games/games-mapper.js';
import type { NflGame } from '#/modules/nfl/types/nfl-game.js';

export async function getGames(): Promise<NflGame[]> {
  const scoreboard = await getScoreboard();

  return scoreboard.events
    .map(mapEspnEventToNflGame)
    .filter(game => game !== null);
}
