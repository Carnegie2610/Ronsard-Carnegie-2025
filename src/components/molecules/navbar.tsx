import React from 'react'
import NavItem from '@/components/atoms/navItem'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'
function Navbar() {
  const t = useTranslations('navbar')
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavItem href="/">{t('Header.home')}</NavItem>
          </li>
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
        </ul>
        <LanguageSwitcher />
      </nav>
    </div>
  )
}

export default Navbar
