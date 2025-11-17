import { ReactNode } from 'react';
import { Outfit, Lato } from 'next/font/google';
import './globals.css';
import { getLocale } from 'next-intl/server';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['700', '900'] });

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${outfit.variable} ${lato.variable} flex min-h-screen flex-col bg-gray-100 font-sans`}>
        {children}
      </body>
    </html>
  );
}
