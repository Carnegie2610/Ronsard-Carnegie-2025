import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale } from './routing';
import { cookies } from 'next/headers';

// Type assertion for locale
const assertLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

export default getRequestConfig(async ({ locale }: { locale?: string }) => {
  try {
    // Always prioritize the passed locale parameter first
    let resolvedLocale = locale || defaultLocale;
    
    // Validate the locale parameter immediately
    if (locale && !assertLocale(locale)) {
      console.error('Invalid locale parameter:', locale);
      resolvedLocale = defaultLocale;
    }
    
    // Only check cookie if no valid locale is explicitly passed
    if (!locale || !assertLocale(locale)) {
      try {
        // In Next.js App Router, cookies() returns a Promise of ReadonlyRequestCookies
        const cookieStore = await cookies();
        const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
        if (localeCookie && assertLocale(localeCookie)) {
          console.log('Found valid locale cookie:', localeCookie);
          resolvedLocale = localeCookie;
        }
      } catch (e) {
        console.error('Error reading cookies:', e);
      }
    }

    console.log('Resolving locale in i18n.ts:', resolvedLocale);

    // Final validation - ensure we always have a valid locale
    if (!assertLocale(resolvedLocale)) {
      console.error('Invalid locale after all checks:', resolvedLocale);
      resolvedLocale = defaultLocale;
    }

    console.log(`Loading messages for locale: ${resolvedLocale}`);

    // Define a list of available message namespaces
    const namespaces = [
      'projects',
      'footer',
      // 'about',
      // 'articles',
      // 'education',
      // 'contact',
      'navbar',
    ];

    console.log('Namespaces loaded:', namespaces);

    // Load all namespace messages
    const messages: Record<string, Record<string, string>> = {};
    
    for (const namespace of namespaces) {
      try {
        console.log(`Attempting to load ${namespace} for ${resolvedLocale}...`);
        // Ensure we get a plain object by using JSON.parse
        const namespaceMessages = await import(`../../messages/${resolvedLocale}/${namespace}.json`);
        messages[namespace] = JSON.parse(JSON.stringify(namespaceMessages.default || namespaceMessages));
        console.log(`Successfully loaded ${namespace} for ${resolvedLocale}`);
      } catch (error) {
        console.error(`Error loading ${namespace} for ${resolvedLocale}:`, error);
        // Set an empty object for this namespace to prevent errors
        messages[namespace] = {} as Record<string, string>;
      }
    }

    console.log(`Total namespaces loaded for ${resolvedLocale}:`, Object.keys(messages).length);

    return {
      locale: resolvedLocale,
      messages,
      // You can set other configuration options here
      timeZone: 'Europe/Berlin',
    };
  } catch (error) {
    console.error('Error in getRequestConfig:', error);
    // Return a valid locale even in the error case
    return { 
      locale: defaultLocale,
      messages: {} 
    };
  }
});
