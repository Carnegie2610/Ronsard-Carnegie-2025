import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/molecules/navbar';
import Footer from '@/components/molecules/Footer';
import { ThemeProvider } from 'next-themes';

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  const messages = await getMessages();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>   

    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <div className="flex flex-1 flex-col overflow-x-hidden items-center w-full">
        <Navbar />
        <div className="grow w-full max-w-[1400px] mt-32 mb-10 flex flex-col bg-white/10 dark:bg-white/[0.02] backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] border border-white/30 dark:border-white/10 rounded-[3rem] overflow-hidden relative">
          <main className="grow px-4 md:px-8 py-8 w-full">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </NextIntlClientProvider>
    </ThemeProvider>
  );
}

