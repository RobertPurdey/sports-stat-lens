import { createContext } from 'react';

import { locales, type Locale } from '@/locales';

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  text: (typeof locales)['en'];
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);