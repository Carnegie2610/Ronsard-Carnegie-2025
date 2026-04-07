'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Cleanly match the current route even with a locale prefix (e.g /en/about matches /about)
  const isActive = pathname === href || pathname.endsWith(href) || (pathname.length === 3 && href === '/')

  return (
    <Link 
  href={href}
  className={`flex items-center justify-center 
    px-6 py-3.5 
    md:px-8 md:py-3 
    rounded-[2rem] transition-all duration-300 font-bold whitespace-nowrap
    ${isActive 
      ? 'bg-primary text-background shadow-md' 
      : 'text-muted-foreground hover:bg-muted/80 hover:text-foreground'
    }`}
>
  {children}
</Link>
  )
}

export default NavItem
