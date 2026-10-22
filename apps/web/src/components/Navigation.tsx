
import { NavLink } from 'react-router';
import { useLocale } from '@/contexts/useLocale';

function Navigation() {
  const { text } = useLocale();

  return (
    <nav className="border-b border-border" aria-label="Sports navigation">
      <div className="mx-auto flex h-12 max-w-7xl items-center gap-6 px-6">
        <NavLink to="/nfl">{text.nfl}</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
