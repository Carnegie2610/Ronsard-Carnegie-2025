import React from 'react'
import NavItem from '@/components/atoms/navItem'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'
import ThemeSwitcher from './themeSwitcher'

function Navbar() {
  const t = useTranslations('navbar')
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav className="flex items-center gap-4 md:gap-8 px-8 py-4 border border-primary/5  bg-background/80 backdrop-blur-md shadow-md text-sm md:text-xl font-heading">
        <ul className="flex items-center gap-6 md:gap-10">
          {/* <li>
            <NavItem href="/">{t('Header.home')}</NavItem>
          </li> */}
          <li>
            <NavItem href="/about">{t('Header.about')}</NavItem>
          </li>
          <li>
            <NavItem href="/articles">{t('Header.articles')}</NavItem>
          </li>
          <li>
            <NavItem href="/education">{t('Header.education')}</NavItem>
          </li>
          <li>
            <NavItem href="/projects">{t('Header.projects')}</NavItem>
          </li>
          <li className="flex items-center pl-2 border-l">
            <LanguageSwitcher />
          </li>
          <li className="flex items-center">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
