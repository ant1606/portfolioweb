import React from 'react'
import contactImage from '@/public/contact_image.svg';
import Image from 'next/image';
import Typography from './Typography';
const Contact = () => {
  return (
    <section id="contact" className='my-16'>
      <Typography variant='h1' className='mb-8'>Dejame un mensaje</Typography>
      <div className='flex'>
        <form className="flex flex-col gap-6">
          <div>
            <Typography variant='label' className='text-web-blue'>Tu nombre</Typography>
            <input type="text" className='min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' />
          </div>
          <div>
            <Typography variant='label' className='text-web-blue'>Tu correo electrónico</Typography>
            <input type="email" className=' min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' />
          </div>
          <div>
            <Typography variant='label' className='text-web-blue'>Tu mensaje</Typography>
            <textarea className=' min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' rows={5} />
          </div>
          <input type="submit" value="Enviar" className='bg-web-blue text-white font-extrabold text-2xl rounded-full w-full py-2 sm:w-fit sm:self-end sm:py-1 sm:px-20' />
        </form>
        <figure>
          <Image src={contactImage} alt={"imagen de contacto"} className='hidden lg:block' />
        </figure>
      </div>
    </section>
  )
}

export default Contact