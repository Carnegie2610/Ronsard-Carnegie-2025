import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'
const FooterItems = () => {
  const t = useTranslations('footer')
  return (
    <div>
      <ul>
        <li>
          <Link href="/">{t('home')}</Link>
        </li>
        <li>
          <Link href="/about">{t('about')}</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/articles">{t('articles')}</Link>
        </li>
        <li>
          <Link href="/education">{t('education')}</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/projects">{t('projects')}</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/contact">{t('contact')}</Link>
        </li>
        <li>
          <Link href="/privacy">{t('privacy')}</Link>
        </li>
        <li>
          <Link href="/terms">{t('terms')}</Link>
        </li>
        <li>
          <Link href="/cookies">{t('cookies')}</Link>
        </li>
      </ul>
      <ul>
        <li>
              <Link href="/copyright">{t('copyright')}</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/disclaimer">{t('disclaimer')}</Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterItems
