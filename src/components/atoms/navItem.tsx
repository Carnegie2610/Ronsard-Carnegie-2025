import React from 'react'
import Link from 'next/link'

function navItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export default navItem
