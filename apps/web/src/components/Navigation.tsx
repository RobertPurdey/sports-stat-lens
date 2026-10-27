
import { NavLink } from 'react-router';
import { useLocale } from '@/contexts/use-locale';

function Navigation() {
  const { text } = useLocale();

  return (
    <nav className="border-b border-border" aria-label="Sports navigation">
      <div className="mx-auto flex h-12 max-w-7xl items-center gap-6 px-6">
        <NavLink
          to="/nfl"
          className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
        >
          {text.nfl}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
