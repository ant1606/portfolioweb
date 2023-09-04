'use client'
import React from 'react'
import { IconContext } from 'react-icons';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const handleClickMobileMenu = () => {
    console.log("Mostrar menu");
  }
  return (
    <nav className='bg-web-blue h-15'>
      <ul className='flex justify-end items-center'>
        <li className='hidden md:block'>Inicio</li>
        <li className='hidden md:block'>Portafolio</li>
        <li className='hidden md:block'>Contacto</li>
        <li className='md:hidden px-5' onClick={handleClickMobileMenu}>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <BiMenuAltRight />
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar