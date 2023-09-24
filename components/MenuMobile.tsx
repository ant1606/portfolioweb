'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuMobile = ({ isShow, setIsShow }: Props) => {
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      // Si el clic ocurrió fuera del menú, ocultar el menú
      // setShowMenu(false);
      setIsShow(false);
      console.log("Click fuera del menu mobile");
    }
  };

  const closeMenuMobile = () => {
    setIsShow(false);
  }

  useEffect(() => {
    // Agregar un event listener para detectar clics en el documento
    document.addEventListener('mousedown', handleClickOutside);

    // Retornar una función de limpieza para eliminar el event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className={`bg-web-gray fixed  z-20 top-0 transition-all ease-out delay-200 duration-700 ${isShow ? 'w-3/4 right-0 ' : 'w-0 -right-20 pointer-events-none'}`}>
      <ul className=' bg-web-blue flex flex-col min-h-screen items-center justify-center'>
        <Link
          href="#home"
          className='text-2xl text-web-white font-bold leading-snug h-36 min-w-full flex items-center justify-center hover:bg-web-light-blue transition-colors delay-400 ease-out'
          onClick={closeMenuMobile}
        >
          Inicio
        </Link>
        <Link
          href="#portafolio"
          className='text-2xl text-web-white font-bold leading-snug h-36 min-w-full flex items-center justify-center hover:bg-web-light-blue transition-colors delay-400 ease-out'
          onClick={closeMenuMobile}
        >
          Portafolio
        </Link>
        <Link
          href="#contact"
          className='text-2xl text-web-white font-bold leading-snug h-36 min-w-full flex items-center justify-center hover:bg-web-light-blue transition-colors delay-400 ease-out'
          onClick={closeMenuMobile}
        >
          Contacto
        </Link>
      </ul>
    </nav>
  )
}

export default MenuMobile