import { useLocale } from '@/contexts/use-locale';
import { useNflGames } from '@/nfl/api/hooks/use-nfl-games';
import GameCard from '@/nfl/components/games/game-card';
import WeekSelector from '@/nfl/components/games/week-selector';
import { useState } from 'react';
import { REGULAR_SEASON_WEEKS } from '@/nfl/constants';

function WeeklyOverview() {
  const { text } = useLocale();
  const { data: games, isPending, isError } = useNflGames();
  const [selectedWeek, setSelectedWeek] = useState(1);

  const renderGames = () => {
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {games.map(game => <GameCard key={game.id} game={game} />)}
      </div>
    );
  };

  return (
    <section className="space-y-4">
      <WeekSelector
        currentWeek={selectedWeek}
        totalWeeks={REGULAR_SEASON_WEEKS}
        onWeekChange={setSelectedWeek}
      />
      <h2 className="text-lg font-semibold text-foreground">{text.week} {selectedWeek} {text.games}</h2>
      {renderGames()}
    </section>
  )
}

export default WeeklyOverview;