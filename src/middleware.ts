// src/middleware.ts

import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale, pathnames } from '@/i18n/routing';

// /**
//  * Checks if the request is for a static asset.
//  * These paths should be ignored by the middleware.
//  * @param req The incoming NextRequest.
//  * @returns boolean
//  */
// function isStaticAssetRequest(req: NextRequest): boolean {
//   const { pathname } = req.nextUrl;
//   // Add any other static asset paths you need to exclude
//   const staticAssetPatterns = [
//     '/images/',
//     '/assets/',
//     '/fonts/',
//     '/videos/',
//   ];
//   return staticAssetPatterns.some(p => pathname.startsWith(p));
// }

// Create the specialized internationalization middleware from next-intl
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix: 'as-needed',
  localeDetection: false,
});

// This is your main middleware function
export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // --- STEP 1: EXPLICITLY IGNORE STATIC ASSETS ---
  // If the request is for a static asset, do nothing and let Next.js handle it.
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/fonts/') ||
    pathname.startsWith('/assets/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.includes('.') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.gif') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js')
  ) {
    return; // Exit middleware early for static assets
  }

  // --- STEP 2: HANDLE LOCALIZATION (for page routes only) ---
    // ✅ THIS IS OUR TRUTH SERUM. It will print in your VS Code terminal.
    console.log(`[Middleware] Path requested: ${pathname}`);
    
    // Now, run the i18n middleware
    const response = intlMiddleware(request);
    
  // --- STEP 3: HANDLE AUTHENTICATION (for page routes only) ---
  // Your authentication logic can go here, as it was before.
  // Note: This part is now cleaner because we know we are not dealing with assets.
  const protectedRoutes = ['/reservation', '/dashboard', '/profile', '/reservation'];
  
  // Create a clean pathname without the locale for checking
  const pathnameWithoutLocale = pathname; // No locale prefix to strip
  const isProtectedRoute = protectedRoutes.some(route => pathnameWithoutLocale.startsWith(route));

  if (isProtectedRoute) {
    // In a real app, you would have your getToken logic here
    // const token = await getToken({ req: request });
    // if (!token) { ... redirect ... }
  }
  
  return response;
}

// The matcher configuration can now be simpler and more inclusive,
// because our logic inside the function is smarter.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (your own static asset folder)
     * - fonts (your own static font folder)
     * - assets (any other asset folder)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     *
     * By explicitly ignoring these paths, we prevent the middleware
     * from ever touching static assets and causing locale errors.
     */
    '/((?!api|_next/static|_next/image|images|fonts|assets|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)'
  ]
};