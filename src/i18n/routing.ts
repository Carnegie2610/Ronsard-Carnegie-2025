import type { LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];

// The `pathnames` object holds pairs of internal and external paths
export const pathnames = {
  '/': '/',
  // '/about': {
  //   en: '/about',
    
  //   de: '/ueber-mich',
  // },
  // '/articles': {
  //   en: '/articles',
  
  //   de: '/artikel',
  // },
  // '/education': {
  //   en: '/education',
  //   de: '/bildung',
  // },
  // '/projects': {
  //   en: '/projects',
  //   de: '/projekte',
  // },
  // '/contact': {
  //   en: '/contact',
  //   de: '/kontaktiere-mich',
  // },
} as const;

// Use the default: `always`
export const localePrefix: LocalePrefix<typeof locales> = 'always';
