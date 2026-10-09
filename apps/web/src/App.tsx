
function App() {
  return (
    <div className='flex min-h-screen flex-col bg-background text-foreground'>
      <header className='border-b border-border'>
        <nav
          className='mx-auto flex h-16 max-w-7xl items-center px-6'
          aria-label='Main navigation'
        >
          <a href='/' className='flex items-center gap-2.5'>
            <span className='flex size-9 items-center justify-center rounded-lg bg-primary/10 text-xl text-primary'>
              ◈
            </span>
            <span className='text-lg font-bold tracking-tight'>
              Sport<span className='text-primary'>Lens</span>
            </span>
          </a>
        </nav>
      </header>

      <main className='flex-1'>
        <section className='relative isolate overflow-hidden'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(96,165,250,0.14),transparent_65%)]'
          />

          <div className='mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44'>
            <div className='max-w-3xl'>
              <p className='mb-6 text-sm font-semibold tracking-[0.2em] text-primary uppercase'>
                A clear view of the game
              </p>

              <h1 className='text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl lg:text-7xl'>
                See the game
                <span className='mt-2 block text-primary'>
                  differently.
                </span>
              </h1>

              <p className='mt-7 max-w-xl text-lg leading-8 text-secondary sm:text-xl'>
                Explore sports data, uncover performance trends,
                and discover the stories behind the numbers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-border'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs text-muted'>
          <span className='font-semibold text-foreground'>SportLens</span>
          <span>See the game differently.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
