'use client'
import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { BiMenuAltRight } from "react-icons/bi";
import MenuMobile from './MenuMobile';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const handleClickMobileMenu = () => {
    setShowMobileMenu(true);
  }

  return (
    <>
      <nav className='bg-web-blue h-15 sticky top-0 z-10'>
        <ul className='flex justify-end items-center'>
          <li className='hidden md:block'>Inicio</li>
          <li className='hidden md:block'>Portafolio</li>
          <li className='hidden md:block'>Contacto</li>
          <li className='md:hidden px-5' onClick={handleClickMobileMenu}>
            <IconContext.Provider value={{ size: '3.5em', color: '#FAFAFA' }}>
              <BiMenuAltRight />
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
      {showMobileMenu &&
        <MenuMobile isShow={showMobileMenu} setIsShow={setShowMobileMenu} />}
    </>
  )
}

export default Navbar