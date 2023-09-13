import React from 'react'
import contactImage from '@/public/contact_image.png';
import Image from 'next/image';
const Contact = () => {
  return (
    <section className='my-16'>
      <h1 className='font-black text-[2.35rem] sm:text-[2.5rem] text-center leading-tight lg:text-6xl mb-8'>
        Dejame un mensaje
      </h1>
      <div className='flex'>
        <form className="flex flex-col gap-6">
          <div>
            <label className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Tu nombre</label>
            <input type="text" className='min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' />
          </div>
          <div>
            <label className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Tu correo electrónico</label>
            <input type="email" className=' min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' />
          </div>
          <div>
            <label className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Tu mensaje</label>
            <textarea className=' min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' rows={5} />
          </div>
          <input type="submit" value="Enviar" className='bg-web-blue text-white font-extrabold text-3xl rounded-full w-full py-2 sm:w-fit sm:self-end sm:py-1 sm:px-20' />
        </form>
        <figure>
          <Image src={contactImage} alt={"imagen de contacto"} className='hidden lg:block' />
        </figure>
      </div>
    </section>
  )
}

export default Contact