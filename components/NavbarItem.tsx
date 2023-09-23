import Link from 'next/link'
import React from 'react'

interface Props {
  href: string;
  className: string;
  content: string;
}
const NavbarItem: React.FC<Props> = ({ href, className, content }) => {
  return (
    <Link
      href={href}
      className={`hidden font-bold text-3xl px-5 py-3 hover:bg-web-light-blue sm:block sm:grow sm:py-4 md:grow-0 md:min-w-[12rem] transition-colors delay-400 ease-out ${className}`}
    >
      {content}
    </Link>
  )
}

export default NavbarItem