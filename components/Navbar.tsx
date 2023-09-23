'use client'
import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { BiMenuAltRight } from "react-icons/bi";
import MenuMobile from './MenuMobile';
import Link from 'next/link';
import NavbarItem from './NavbarItem';

const menuLinks = [
  {
    href: "#home",
    className: "",
    content: "Inicio"
  },
  {
    href: "#portafolio",
    className: "",
    content: "Portafolio"
  },
  {
    href: "#contact",
    className: "",
    content: "Contacto"
  },
]
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const handleClickMobileMenu = () => {
    setShowMobileMenu(true);
  }

  return (
    <>
      <nav className='bg-web-blue h-15 sticky top-0 z-10'>
        <ul className='flex justify-end items-center text-web-white sm:justify-between sm:text-center md:justify-end'>
          {menuLinks.map((link) =>
            <NavbarItem
              key={link.content}
              content={link.content}
              className={link.className}
              href={link.href}
            />
          )}
          {/* <li className='hidden font-bold text-3xl px-5 py-3 hover:bg-web-light-blue sm:block sm:grow sm:py-7 md:grow-0 md:min-w-[12rem]'>Inicio</li>
          <li className='hidden font-bold text-3xl px-5 py-3 hover:bg-web-light-blue sm:block sm:grow sm:py-7 md:grow-0 md:min-w-[12rem]'>Portafolio</li>
          <li className='hidden font-bold text-3xl px-5 py-3 hover:bg-web-light-blue sm:block sm:grow sm:py-7 md:grow-0 md:min-w-[12rem]'>Contacto</li> */}
          <li className='sm:hidden px-5' onClick={handleClickMobileMenu}>
            <IconContext.Provider value={{ size: '3.5em', color: '#FAFAFA' }}>
              <BiMenuAltRight />
            </IconContext.Provider>
          </li>
        </ul>
      </nav >
      {showMobileMenu &&
        <MenuMobile isShow={showMobileMenu} setIsShow={setShowMobileMenu} />
      }
    </>
  )
}

export default Navbar