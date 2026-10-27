import { useState, type ReactNode } from 'react';

import { locales, type Locale } from '@/locales';
import { LocaleContext } from '../../contexts/locale-context';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  return (
    <LocaleContext
      value={{
        locale,
        setLocale,
        text: locales[locale],
      }}
    >
      {children}
    </LocaleContext>
  );
}

export default LocaleProvider;