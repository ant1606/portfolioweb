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
        <ul className='flex justify-end items-center text-web-white sm:justify-between sm:text-center'>
          <li className='hidden sm:block sm:grow font-bold text-3xl px-5 py-3 hover:bg-web-light-blue'>Inicio</li>
          <li className='hidden sm:block sm:grow font-bold text-3xl px-5 py-3 hover:bg-web-light-blue'>Portafolio</li>
          <li className='hidden sm:block sm:grow font-bold text-3xl px-5 py-3 hover:bg-web-light-blue'>Contacto</li>
          <li className='sm:hidden px-5' onClick={handleClickMobileMenu}>
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