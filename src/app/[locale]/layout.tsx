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
      <div className="flex flex-1 flex-col overflow-hidden items-center w-full">
        <Navbar />
        <div className="grow w-full max-w-6xl mt-24 mb-0 flex flex-col bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-x border-t border-black/5 dark:border-white/10 ">
          <main className="grow px-4 md:px-8 py-8 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </NextIntlClientProvider>
    </ThemeProvider>
  );
}

