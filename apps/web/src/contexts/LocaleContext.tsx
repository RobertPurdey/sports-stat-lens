import { createContext, useState, type ReactNode } from 'react';

import { locales, type Locale } from '@/locales';

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  text: (typeof locales)['en'];
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

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