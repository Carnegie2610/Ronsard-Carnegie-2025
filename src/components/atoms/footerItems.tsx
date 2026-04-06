import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'
const FooterItems = () => {
  const t = useTranslations('footer')
  
  return (
    <div className="flex flex-col md:flex-row justify-between w-full h-full gap-10 md:gap-8">
      
      {/* Main Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-3/4">
        <ul className="flex flex-col space-y-3">
          <li>
            <Link href="/" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('home')}</Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('about')}</Link>
          </li>
        </ul>
        
        <ul className="flex flex-col space-y-3">
          <li>
            <Link href="/articles" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('articles')}</Link>
          </li>
          <li>
            <Link href="/education" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('education')}</Link>
          </li>
        </ul>
        
        <ul className="flex flex-col space-y-3">
          <li>
            <Link href="/projects" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('projects')}</Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('contact')}</Link>
          </li>
        </ul>
      </div>

      {/* Legal & Policies */}
      <div className="w-full md:w-1/4 flex flex-col space-y-3 md:items-end">
        <ul className="flex flex-col space-y-3 md:items-end">
          <li>
            <Link href="/privacy" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('privacy')}</Link>
          </li>
          <li>
            <Link href="/terms" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('terms')}</Link>
          </li>
          <li>
            <Link href="/cookies" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t('cookies')}</Link>
          </li>
        </ul>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="w-full flex-col md:flex-row flex justify-between items-center border-t pt-8 mt-8 text-xs text-muted-foreground font-body">
        <div className="mb-4 md:mb-0">
          <Link href="/copyright" className="hover:text-primary transition-colors">{t('copyright')}</Link>
        </div>
        <div>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">{t('disclaimer')}</Link>
        </div>
      </div>
    </div>
  )
}

export default FooterItems
