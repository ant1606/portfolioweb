"use client"
import Link from 'next/link';
import React from 'react'
import { IconContext } from 'react-icons';
import { FaArrowUp } from "react-icons/fa6";

const GoUp = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div
      className='bg-web-blue rounded-full text-web-white fixed p-2 right-2 bottom-2 cursor-pointer border-2 border-web-white z-0
      hover:bg-web-white hover:text-web-blue hover:border-web-blue  transition-colors ease-in-out'
      onClick={scrollUp}>
      <IconContext.Provider value={{ size: '1.75em' }}>
        <FaArrowUp />
      </IconContext.Provider>
    </div>
  )
}

export default GoUp