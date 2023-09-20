import Image from 'next/image'
import React from 'react'
import Typography from './Typography'

const Hero = () => {
  //TODO Agregar imagen en Hero
  return (
    <section id="home"
      className='pt-5 sm:pt-14 min-w-full flex flex-col gap-10 items-center 
                sm:grid sm:grid-cols-2 md:flex md:gap-12'>
      <figure className='flex justify-center' >
        {/* <Image width={200} height={200} src="https://picsum.photos/200" alt="mi foto" /> */}
        <img src="https://picsum.photos/200" alt="mi foto" />
      </figure>
      <Typography variant="h1" className="text-web-dark sm:order-first sm:col-span-2 md:-order-none  ">
        Hola, soy <br className='sm:hidden' /> <Typography variant="strong" className="text-web-blue">Anthony Tasayco Pachas</Typography>
      </Typography>
      <div className='flex flex-col gap-10 justify-between items-center sm:h-full md:gap-12'>
        <Typography variant='h2' className='uppercase grow flex items-end md:font-light'>
          Desarrollador frontend & backend
        </Typography>
        <button
          className='font-bold text-[1.5rem] text-white bg-web-blue rounded-tl-3xl rounded-br-3xl py-2.5 min-w-full 
        md:text-3xl md:min-w-fit md:px-20 md:py-6 btn_cta'>
          Contáctame
        </button>
      </div>
    </section>
  )
}

export default Hero