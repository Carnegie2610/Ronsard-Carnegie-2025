import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/molecules/navbar';
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
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
    </ThemeProvider>
  );
}

