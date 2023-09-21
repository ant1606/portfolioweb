"use client"
import React, { useEffect, useRef } from 'react'
import contactImage from '@/public/contact_image.svg';
import Image from 'next/image';
import Typography from './Typography';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_s8qbubv', 'template_09dpchi', form.current as HTMLFormElement, 'YJWd6PBfNY7eF35dM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <section id="contact" className='my-16'>
      <Typography variant='h1' className='mb-8'>Dejame un mensaje</Typography>
      <div className='flex'>
        <form ref={form} method="post" encType="text/plain" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <Typography variant='label' className='text-web-blue'>Tu nombre</Typography>
            <input type="text" id="from_name" name="from_name" className='min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' />
          </div>
          <div>
            <Typography variant='label' className='text-web-blue'>Tu correo electrónico</Typography>
            <input type="email" id="from_email" name="from_email" className=' min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' />
          </div>
          <div>
            <Typography variant='label' className='text-web-blue'>Tu mensaje</Typography>
            <textarea name="message" id="message" className=' min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl' rows={5} />
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