import nflLogo from '@/nfl/assets/nfl-logo.svg';
import { useLocale } from '@/contexts/useLocale';

function NflPage() {
  const { text } = useLocale();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <img src={nflLogo} alt="NFL logo" className="h-24 w-auto" />
      <h1 className="text-3xl font-bold">{text.nfl}</h1>
    </section>
  );
}

export default NflPage;