import { useLocale } from '@/contexts/use-locale';
import type { NflGame } from '@/nfl/api/types';

interface GameCardProps {
  game: NflGame;
}

function formatKickoff(kickoff: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(kickoff));
}

function TeamLogo({ name, logo }: { name: string; logo: string | null }) {
  if (!logo) {
    return (
      <div
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-raised text-sm font-bold text-secondary"
      >
        {name.slice(0, 3).toUpperCase()}
      </div>
    );
  }

  return <img src={logo} alt="" className="size-12 shrink-0 object-contain" loading="lazy" />;
}

function GameStatus({ game }: GameCardProps) {
  const { text } = useLocale();

  if (game.status === 'live') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
        <span className="size-1.5 animate-pulse rounded-full bg-accent" />
        {text.live}
      </span>
    );
  }

  if (game.status === 'final') {
    return <span className="text-xs font-medium text-muted">{text.final}</span>;
  }

  return <span className="text-xs font-medium text-secondary">{text.upcoming}</span>;
}

export function GameCard({ game }: GameCardProps) {
  const { text } = useLocale();
  const isScheduled = game.status === 'scheduled';

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/40">
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">{text.nfl}</span>
        <GameStatus game={game} />
      </header>
      <div className="space-y-5 p-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="flex min-w-0 flex-col items-center gap-2 text-center">
            <TeamLogo name={game.awayTeam.abbreviation} logo={game.awayTeam.logo} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{game.awayTeam.name}</p>
              <p className="mt-0.5 text-xs text-muted">{game.awayTeam.abbreviation}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 tabular-nums">
            <span className={`text-3xl font-bold tracking-tight ${isScheduled ? 'text-muted' : 'text-foreground'}`}>
              {game.awayScore ?? '—'}
            </span>
            <span className="text-sm text-muted">–</span>
            <span className={`text-3xl font-bold tracking-tight ${isScheduled ? 'text-muted' : 'text-foreground'}`}>
              {game.homeScore ?? '—'}
            </span>
          </div>
          <div className="flex min-w-0 flex-col items-center gap-2 text-center">
            <TeamLogo name={game.homeTeam.abbreviation} logo={game.homeTeam.logo} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{game.homeTeam.name}</p>
              <p className="mt-0.5 text-xs text-muted">{game.homeTeam.abbreviation}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-border pt-3 text-xs text-secondary">
          <span>{isScheduled ? text.kickoff : text.gameTime}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={game.kickoff}>{formatKickoff(game.kickoff)}</time>
        </div>
      </div>
    </article>
  );
}