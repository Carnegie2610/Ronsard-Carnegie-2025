import { ReactNode } from 'react';
import { Acme, Sora } from 'next/font/google';
import './globals.css';
import { getLocale } from 'next-intl/server';

const acme = Acme({ subsets: ['latin'], weight: '400', variable: '--font-acme' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      
      <body className={`${acme.variable} ${sora.variable} flex min-h-screen flex-col bg-background text-foreground font-body relative`}>
        {/* Radial Background Overlay */}
        <div className="fixed inset-0 z-[-2] min-h-screen w-full bg-background bg-[radial-gradient(#1219d333_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {children}
      </body>
    </html>
  );
}
