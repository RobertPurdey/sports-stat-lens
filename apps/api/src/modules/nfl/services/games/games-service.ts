
import { getScoreboard } from '#/modules/nfl/providers/espn/espn-provider.js';
import { mapEspnEventToNflGame } from '#/modules/nfl/services/games/games-mapper.js';
import type { NflGame } from '#/modules/nfl/types/nfl-game.js';
import type { NflGameFilter } from '#/modules/nfl/types/nfl-game-filter.js';

export async function getGames(filter: NflGameFilter): Promise<NflGame[]> {
  const scoreboard = await getScoreboard(filter);

  return scoreboard.events
    .map(mapEspnEventToNflGame)
    .filter(game => game !== null);
}
