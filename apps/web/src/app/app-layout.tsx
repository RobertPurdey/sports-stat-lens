import { Outlet } from 'react-router';
import { useLocale } from '@/contexts/useLocale';
import Navigation from '@/components/navigation';

function AppLayout() {
  const { text } = useLocale();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center px-6"
          aria-label={text.navigationLabel}
        >
          <a href="/" className="text-lg font-bold">{text.brandName}</a>
        </nav>
      </header>

      <Navigation />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-4 text-xs">
          <span>{text.brandName}</span>
          <span>{text.tagline}</span>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;