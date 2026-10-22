import type { EspnScoreboardResponse } from '#/modules/nfl/providers/espn/espn-types.js';

const ESPN_SCOREBOARD_URL = process.env.ESPN_SCOREBOARD_URL;

export async function getScoreboard(): Promise<EspnScoreboardResponse> {
  if (!ESPN_SCOREBOARD_URL) throw new Error('ESPN_SCOREBOARD_URL is not configured');

  const scoreboardResponse = await fetch(ESPN_SCOREBOARD_URL, {
    signal: AbortSignal.timeout(10_000)
  });

  if (!scoreboardResponse.ok) {
    throw new Error(`ESPN scoreboard request failed: ${scoreboardResponse.status}`)
  }

  return (await scoreboardResponse.json()) as EspnScoreboardResponse;
}