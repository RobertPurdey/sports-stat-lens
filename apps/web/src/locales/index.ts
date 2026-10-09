import en from './en.json';

export const locales = {
  en,
};

export type Locale = keyof typeof locales;
