import { useLocale } from '@/contexts/useLocale';

function HomePage() {
  const { text } = useLocale();

  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(96,165,250,0.14),transparent_65%)]"
      />

      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-primary uppercase">{text.gameOverview}</p>

          <h1 className="text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {text.headline}
            <span className="mt-2 block text-primary">{text.headlineAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-secondary sm:text-xl">{text.introduction}</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;