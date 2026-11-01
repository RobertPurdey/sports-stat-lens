import type { EspnScoreboardResponse } from '#/modules/nfl/providers/espn/espn-types.js';
import type { NflGameFilter } from '#/modules/nfl/types/nfl-game-filter.js';

const ESPN_SCOREBOARD_URL = process.env.ESPN_SCOREBOARD_URL;

export async function getScoreboard(filter: NflGameFilter): Promise<EspnScoreboardResponse> {
  if (!ESPN_SCOREBOARD_URL) throw new Error('ESPN_SCOREBOARD_URL is not configured');

  const url = new URL(ESPN_SCOREBOARD_URL);

  if (filter.week !== undefined) {
    url.searchParams.set('week', String(filter.week));
  }

  const scoreboardResponse = await fetch(url, {
    signal: AbortSignal.timeout(10_000)
  });

  if (!scoreboardResponse.ok) {
    throw new Error(`ESPN scoreboard request failed: ${scoreboardResponse.status}`)
  }

  return (await scoreboardResponse.json()) as EspnScoreboardResponse;
}