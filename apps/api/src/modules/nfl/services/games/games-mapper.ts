
import type { EspnEvent, EspnCompetitor } from '@/modules/nfl/providers/espn/espn-types.js';
import type { NflGame, NflGameStatus } from '@/modules/nfl/types/nfl-game.js';
import type { NflTeam } from '@/modules/nfl/types/nfl-team.js';

function mapTeam(competitor: EspnCompetitor): NflTeam {
  return {
    id: competitor.team.id,
    name: competitor.team.displayName,
    abbreviation: competitor.team.abbreviation,
    logo: competitor.team.logo || null,
  };
}

function mapScore(score: string | undefined): number | null {
  if (score === undefined || score.trim() === '') {
    return null;
  }

  const value = Number(score);
  return Number.isFinite(value) ? value : null;
}

function mapStatus(event: EspnEvent): NflGameStatus {
  const { completed, state } = event.status.type;

  if (completed) {
    return 'final';
  }

  if (state === 'in') {
    return 'live';
  }

  return 'scheduled';
}

export function mapEspnEventToNflGame(
  event: EspnEvent,
): NflGame | null {
  const competition = event.competitions[0];

  if (!competition) {
    return null;
  }

  const home = competition.competitors.find(competitor => competitor.homeAway === 'home');
  const away = competition.competitors.find(competitor => competitor.homeAway === 'away');

  if (!home || !away) {
    return null;
  }

  return {
    id: event.id,
    kickoff: event.date,
    status: mapStatus(event),
    homeTeam: mapTeam(home),
    awayTeam: mapTeam(away),
    homeScore: mapScore(home.score),
    awayScore: mapScore(away.score),
  };
}
