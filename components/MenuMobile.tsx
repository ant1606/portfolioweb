'use client'
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

  useEffect(() => {
    // Agregar un event listener para detectar clics en el documento
    document.addEventListener('mousedown', handleClickOutside);

    // Retornar una función de limpieza para eliminar el event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className='bg-web-gray w-3/4 fixed right-0 top-0 z-20'>
      <ul className=' bg-web-blue flex flex-col min-h-screen items-center justify-center'>
        <li className='text-2xl text-web-white font-bold leading-snug h-36 min-w-full flex items-center justify-center hover:bg-web-light-blue'>
          Inicio
        </li>
        <li className='text-2xl text-web-white font-bold leading-snug h-36 min-w-full flex items-center justify-center border-y-4 hover:bg-web-light-blue'>
          Portafolio
        </li>
        <li className='text-2xl text-web-white font-bold leading-snug h-36 min-w-full flex items-center justify-center hover:bg-web-light-blue'>
          Contacto
        </li>
      </ul>
    </nav>
  )
}

export default MenuMobile