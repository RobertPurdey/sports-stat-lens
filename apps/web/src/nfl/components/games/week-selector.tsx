import { useLocale } from '@/contexts/use-locale';

interface WeekSelectorProps {
  currentWeek: number;
  totalWeeks: number;
  onWeekChange: (week: number) => void;
}

export function WeekSelector({ currentWeek, totalWeeks, onWeekChange }: WeekSelectorProps) {
  const { text } = useLocale();
  const weeks = Array.from({ length: totalWeeks }, (_, index) => index + 1);

  return (
    <div className="rounded-xl border border-border bg-surface p-1.5">
      <ul
        aria-label='weeks'
        className="flex items-center gap-1 overflow-x-auto [scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]"
      >
        {weeks.map((week) => {
          const isActive = currentWeek === week;

          return (
            <li key={week} className="min-w-[75px] flex-1 shrink-0">
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onWeekChange(week)}
                className={`w-full whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                  ${
                    isActive
                      ? 'border border-border bg-raised text-foreground shadow-sm'
                      : 'text-secondary hover:bg-raised/50 hover:text-foreground'
                  }
                `}
              >
                {`${text.week} ${week}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WeekSelector;