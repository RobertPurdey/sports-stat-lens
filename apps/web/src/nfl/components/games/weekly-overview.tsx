import { useLocale } from "@/contexts/use-locale";
import { useNflGames } from "@/nfl/api/hooks/use-nfl-games";
import { GameCard } from "@/nfl/components/games/game-card";

function WeeklyOverview() {
  const { text } = useLocale();
  const { data: games, isPending, isError } = useNflGames();

  if (isPending) {
    return <p className="text-sm text-secondary">{text.loadingGames}</p>;
  }

  if (isError) {
    return <p className="text-sm text-red-400">{text.loadGameError}</p>;
  }

  if (!games?.length) {
    return <p className="text-sm text-secondary">{text.gamesUnavailable}</p>;
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">{text.weeklyGames}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        { games.map(game => <GameCard key={game.id} game={game} />) }
      </div>
    </section>
  )
}

export default WeeklyOverview;