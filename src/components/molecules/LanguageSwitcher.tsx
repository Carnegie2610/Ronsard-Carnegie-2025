'use client';
import React, { useState, useEffect, useTransition } from 'react';
import { locales, Locale, defaultLocale } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import clsx from 'clsx';

interface FlagIconProps {
  countryCode: Locale;
}

function FlagIcon({ countryCode = defaultLocale }: FlagIconProps) {
  return (
    <div className="w-6 h-6 flex">
      {countryCode === 'de' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
          <desc>Flag of Germany</desc>
          <rect id="black_stripe" width="5" height="3" y="0" x="0" fill="#000" />
          <rect id="red_stripe" width="5" height="2" y="1" x="0" fill="#D00" />
          <rect id="gold_stripe" width="5" height="1" y="2" x="0" fill="#FFCE00" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30">
          <clipPath id="t">
            <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
          </clipPath>
          <path d="M0,0v30h50v-30z" fill="#012169" />
          <path d="M0,0 50,30M50,0 0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 50,30M50,0 0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
          <path
            d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z"
            fill="#C8102E"
            stroke="#FFF"
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
}

const LANGUAGE_SELECTOR_ID = 'language-selector';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('navbar.Header');
  const router = useRouter();
  const pathname = usePathname();

  console.log('Current locale:', selectedLanguage);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleWindowClick = (event: any) => {
      const target = event.target.closest('button');
      if (target && target.id === LANGUAGE_SELECTOR_ID) return;
      setIsOpen(false);
    };
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const setLocaleCookie = (locale: string) => {
    // Set cookie with both methods to ensure it's available immediately and on server
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const handleLanguageChange = async (locale: Locale) => {
    try {
      if (locale === selectedLanguage) {
        setIsOpen(false);
        return; // No change needed
      }
      
      console.log('Switching language to:', locale);
      setIsOpen(false);

      // Set the locale cookie
      setLocaleCookie(locale);
      
      startTransition(() => {
        // Navigate to the new locale
        router.replace(pathname, { locale });
      });
    } catch (error) {
      console.error('Error in language change:', error);
    }
  };

  

  if (!selectedLanguage) return null;

  return (
    <div
      className={clsx(
        'flex items-center z-40',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md shadow-sm px-2 py-1 bg-white text-black text-xs font-medium hover:bg-gray-50 focus:ring-0"
          aria-haspopup="true"
          aria-expanded={isOpen}
          id={LANGUAGE_SELECTOR_ID}
        >
          <div className="w-4 h-4 flex">
            {selectedLanguage === 'de' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-4 h-4">
                <desc>Flag of Germany</desc>
                <rect id="black_stripe" width="5" height="3" y="0" x="0" fill="#000" />
                <rect id="red_stripe" width="5" height="2" y="1" x="0" fill="#D00" />
                <rect id="gold_stripe" width="5" height="1" y="2" x="0" fill="#FFCE00" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" className="w-4 h-4">
                <clipPath id="t">
                  <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
                </clipPath>
                <path d="M0,0v30h50v-30z" fill="#012169" />
                <path d="M0,0 50,30M50,0 0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 50,30M50,0 0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path
                  d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z"
                  fill="#C8102E"
                  stroke="#FFF"
                  strokeWidth="2"
                />
              </svg>
            )}
          </div>
          <span className="ml-1 text-xs">{selectedLanguage === 'de' ? 'DE' : 'EN'}</span>
          <svg
            className="-mr-1 ml-1 h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white   focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {locales.map((locale) => (
                <button
                  key={locale}
                  className={clsx(
                    'w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center',
                    locale === selectedLanguage ? 'text-[#1469E8] font-medium' : 'text-black'
                  )}
                  onClick={() => handleLanguageChange(locale)}
                  role="menuitem"
                  tabIndex={-1}
                >
                  <FlagIcon countryCode={locale} />
                  <span className="ml-2">{t('locale-switcher.locale', { locale })}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};