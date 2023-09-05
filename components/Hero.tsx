import React from 'react'

const Hero = () => {
  //TODO Agregar imagen en Hero
  return (
    <section className='pt-5 min-w-full flex flex-col gap-6 items-center'>
      <figure>
        <img src="https://picsum.photos/200" alt="mi foto" />
      </figure>
      <h1 className='font-black text-[2.35rem] md:text-[2.5rem] text-center leading-tight'>Hola, soy
        <br className='md:hidden' />
        <strong className='text-web-blue'> Anthony Tasayco</strong>
      </h1>
      <h2 className='font-bold text-[1.5rem] text-center uppercase leading-8'>Desarrollador frontend & backend</h2>
      <button
        className='font-bold text-[1.5rem] text-white bg-web-blue rounded-tl-3xl rounded-br-3xl py-2.5 min-w-full 
        hover:bg-web-light-blue'>
        Contáctame
      </button>
    </section>
  )
}

export default Hero