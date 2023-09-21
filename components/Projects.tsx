'use client';
import React from 'react'
import { TbWorld } from "react-icons/tb";
import { BsFillEyeFill } from "react-icons/bs";
import { SiJavascript, SiDocker, SiHtml5, SiTailwindcss, SiCss3, SiLaravel, SiPhp, SiGithub } from "react-icons/si";
import { IconContext } from 'react-icons';
import noImage from '@/public/no_image.jpg';
import Image from 'next/image';
import Typography from './Typography';
const Projects = () => {
  //TODO agregar imagenes y estilizarlas
  return (
    <section id="portafolio"
      className='min-w-full flex flex-col gap-10 items-center'>
      <Typography variant="h1" className="mt-20 sm:order-first sm:col-span-2 lg:-order-none">
        Mis Proyectos
      </Typography>
      {/* Listado de Proyectos */}
      <div className='flex flex-col gap-8 sm:bg-web-blue sm:p-3 '>

        <article
          className='bg-web-white rounded-xl py-5 flex flex-col gap-4 px-2 
          sm:grid sm:grid-cols-3 lg:h-[300px]'
        >
          <Typography variant='h2' className="text-web-blue sm:order-2 sm:col-span-2">Gestor de Recursos Educativos</Typography>
          <div className="flex flex-col gap-5 sm:row-start-1 sm:row-span-4 sm:order-1">
            <figure className="relative min-w-full min-h-[200px] overflow-hidden">
              <Image alt="no image" src={noImage} fill={true} className='object-cover' />
            </figure>
            <div className="flex items-start justify-around sm:order-5 ">
              <IconContext.Provider value={{ size: "2em" }}>
                <TbWorld />
                <SiGithub />
                <BsFillEyeFill />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:order-3 sm:col-span-2 lg:flex-row lg:py-5">
            <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Tecnologías usadas</Typography>
            <IconContext.Provider value={{ size: "2em" }}>
              <div className="flex justify-around flex-wrap gap-5 ">
                <SiJavascript />
                <SiDocker />
                <SiHtml5 />
                <SiTailwindcss />
                <SiCss3 />
                <SiLaravel />
                <SiPhp />
              </div>
            </IconContext.Provider>

          </div>
          <div className='sm:order-4  sm:col-span-2 lg:flex '>
            <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Descripción del Proyecto</Typography>
            <Typography variant='p' className='text-lg font-normal text-center leading-normal sm:text-left'>
              Aplicativo para realizar el trackeo de recursos educativos, categorización de canales suscritos en youtube y de páginas web.
            </Typography>
          </div>
          <button className="bg-web-blue text-white font-extrabold text-2xl rounded-2xl w-full py-2 sm:hidden">Ir al Proyecto</button>
        </article>

        <article
          className='bg-web-white rounded-xl py-5 flex flex-col gap-4 px-2 
          sm:grid sm:grid-cols-3 lg:h-[300px]'
        >
          <Typography variant='h2' className="text-web-blue sm:order-2 sm:col-span-2">Gestor de Recursos Educativos</Typography>
          <div className="flex flex-col gap-5 sm:row-start-1 sm:row-span-4 sm:order-1">
            <figure className="relative min-w-full min-h-[200px] overflow-hidden">
              <Image alt="no image" src={noImage} fill={true} className='object-cover' />
            </figure>
            <div className="flex items-start justify-around sm:order-5 ">
              <IconContext.Provider value={{ size: "2em" }}>
                <TbWorld />
                <SiGithub />
                <BsFillEyeFill />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:order-3 sm:col-span-2 lg:flex-row lg:py-5">
            <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Tecnologías usadas</Typography>
            <IconContext.Provider value={{ size: "2em" }}>
              <div className="flex justify-around flex-wrap gap-5 ">
                <SiJavascript />
                <SiDocker />
                <SiHtml5 />
                <SiTailwindcss />
                <SiCss3 />
                <SiLaravel />
                <SiPhp />
              </div>
            </IconContext.Provider>

          </div>
          <div className='sm:order-4  sm:col-span-2 lg:flex '>
            <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Descripción del Proyecto</Typography>
            <Typography variant='p' className='text-lg font-normal text-center leading-normal sm:text-left'>
              Aplicativo para realizar el trackeo de recursos educativos, categorización de canales suscritos en youtube y de páginas web.
            </Typography>
          </div>
          <button className="bg-web-blue text-white font-extrabold text-2xl rounded-2xl w-full py-2 sm:hidden">Ir al Proyecto</button>
        </article>

        <article
          className='bg-web-white rounded-xl py-5 flex flex-col gap-4 px-2 
          sm:grid sm:grid-cols-3 lg:h-[300px]'
        >
          <Typography variant='h2' className="text-web-blue sm:order-2 sm:col-span-2">Gestor de Recursos Educativos</Typography>
          <div className="flex flex-col gap-5 sm:row-start-1 sm:row-span-4 sm:order-1">
            <figure className="relative min-w-full min-h-[200px] overflow-hidden">
              <Image alt="no image" src={noImage} fill={true} className='object-cover' />
            </figure>
            <div className="flex items-start justify-around sm:order-5 ">
              <IconContext.Provider value={{ size: "2em" }}>
                <TbWorld />
                <SiGithub />
                <BsFillEyeFill />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:order-3 sm:col-span-2 lg:flex-row lg:py-5">
            <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Tecnologías usadas</Typography>
            <IconContext.Provider value={{ size: "2em" }}>
              <div className="flex justify-around flex-wrap gap-5 ">
                <SiJavascript />
                <SiDocker />
                <SiHtml5 />
                <SiTailwindcss />
                <SiCss3 />
                <SiLaravel />
                <SiPhp />
              </div>
            </IconContext.Provider>

          </div>
          <div className='sm:order-4  sm:col-span-2 lg:flex '>
            <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Descripción del Proyecto</Typography>
            <Typography variant='p' className='text-lg font-normal text-center leading-normal sm:text-left'>
              Aplicativo para realizar el trackeo de recursos educativos, categorización de canales suscritos en youtube y de páginas web.
            </Typography>
          </div>
          <button className="bg-web-blue text-white font-extrabold text-2xl rounded-2xl w-full py-2 sm:hidden">Ir al Proyecto</button>
        </article>



      </div>
    </section>

  )
}

export default Projects 