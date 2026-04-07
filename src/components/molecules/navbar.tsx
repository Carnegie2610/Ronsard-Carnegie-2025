import React from 'react'
import NavItem from '@/components/atoms/navItem'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'
import ThemeSwitcher from './themeSwitcher'

function Navbar() {
  const t = useTranslations('navbar')
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      {/* Flex container separating the 3 distinct blocks */}
      <div className="flex items-center gap-3 md:gap-6 lg:gap-10 overflow-auto">
        
        {/* BLOCK 1: Main Navigation Links */}
        <nav className="flex items-center p-1.5 md:p-1 border border-primary/20 rounded-[3rem] bg-background/80 backdrop-blur-xl shadow-lg text-sm md:text-base font-heading shrink-0">
          <ul className="flex items-center gap-2 md:gap-8">
            <li><NavItem href="/">{t('Header.home')}</NavItem></li>
            <li><NavItem href="/about">{t('Header.about')}</NavItem></li>
            <li><NavItem href="/articles">{t('Header.articles')}</NavItem></li>
            <li><NavItem href="/education">{t('Header.education')}</NavItem></li>
            <li><NavItem href="/projects">{t('Header.projects')}</NavItem></li>
          </ul>
        </nav>

        {/* BLOCK 2: Switchers */}
        <div className="flex items-center gap-4 p-1.5 md:p-1 md:px-2  border border-primary/20 rounded-[3rem] bg-background/80 backdrop-blur-xl shadow-lg text-sm md:text-base font-heading shrink-0 h-full">
          <LanguageSwitcher />
          <div className="w-px  bg-primary/20 mx-1"></div>
          <ThemeSwitcher />
        </div>

        {/* BLOCK 3: CTA */}
        <div className="flex items-center p-1.5 md:p-1 border border-primary/20 rounded-[3rem] bg-background/80 backdrop-blur-xl shadow-lg text-sm md:text-base font-heading shrink-0">
          <NavItem href="/contact">{t('Header.contact')}</NavItem>
        </div>

      </div>
    </header>
  )
}

export default Navbar
