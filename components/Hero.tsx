import Image from 'next/image'
import React from 'react'

const Hero = () => {
  //TODO Agregar imagen en Hero
  return (
    <section
      className='pt-5 sm:pt-14 min-w-full flex flex-col gap-10 items-center 
                sm:grid sm:grid-cols-2 md:flex md:gap-12'>
      <figure className='flex justify-center' >
        {/* <Image width={200} height={200} src="https://picsum.photos/200" alt="mi foto" /> */}
        <img src="https://picsum.photos/200" alt="mi foto" />
      </figure>
      <h1 className='font-black text-[2.35rem] sm:text-[2.5rem] text-center leading-tight sm:order-first sm:col-span-2 md:-order-none md:text-6xl'>Hola, soy
        <br className='sm:hidden' />
        <strong className='text-web-blue'> Anthony Tasayco Pachas</strong>
      </h1>
      <div className='flex flex-col gap-10 justify-between items-center sm:h-full md:gap-12'>
        <h2
          className='font-bold text-[1.5rem] text-center uppercase leading-8 
        grow flex items-end md:text-5xl md:font-light'>
          Desarrollador frontend & backend
        </h2>
        <button
          className='font-bold text-[1.5rem] text-white bg-web-blue rounded-tl-3xl rounded-br-3xl py-2.5 min-w-full 
        hover:bg-web-light-blue md:text-3xl md:min-w-fit md:px-20 md:py-6'>
          Contáctame
        </button>
      </div>
    </section>
  )
}

export default Hero