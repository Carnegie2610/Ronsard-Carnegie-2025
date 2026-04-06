import React from 'react'
import FooterItems from '../atoms/footerItems'
  
const Footer = () => {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/10">
      <div className="w-full px-4 md:px-8 py-12 md:py-16">
        <FooterItems />
      </div>
    </footer>
  )
}

export default Footer
