'use client';
import React from 'react'
import { TbWorld } from "react-icons/tb";
import { BsFillEyeFill } from "react-icons/bs";
import { SiJavascript, SiDocker, SiHtml5, SiTailwindcss, SiCss3, SiLaravel, SiPhp, SiGithub } from "react-icons/si";
import { IconContext } from 'react-icons';
const Projects = () => {
  //TODO agregar imagenes y estilizarlas
  return (
    <section
      className='mt-5 min-w-full flex flex-col gap-10 items-center '>
      <h1 className='font-black text-[2.35rem] sm:text-[2.5rem] text-center leading-tight sm:order-first sm:col-span-2 md:-order-none md:text-6xl'>
        Mis Proyectos
      </h1>
      {/* Listado de Proyectos */}
      <article className='bg-web-white rounded-xl py-5 flex flex-col gap-4 px-2'>
        <h2 className=' text-3xl text-web-blue font-bold text-center'>Proyecto 1</h2>
        <figure>
          <div className="max-w-full h-60 bg-web-gray">foto del proyecto</div>
        </figure>
        <div className="flex justify-around">
          <IconContext.Provider value={{ size: "2em" }}>
            <TbWorld />
            <SiGithub />
            <BsFillEyeFill />
          </IconContext.Provider>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Tecnologías usadas</h3>
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
        <div>
          <h3 className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Descripción del Proyecto</h3>
          <p className="text-lg font-normal text-center leading-normal">Aplicativo para realizar el trackeo de recursos educativos, categorización de canales suscritos en youtube y de páginas web. </p>
        </div>
        <button className="bg-web-blue text-white font-extrabold text-3xl rounded-full w-full py-2">Ir al Proyecto</button>
      </article>

      <article className='bg-web-white rounded-xl py-5 flex flex-col gap-4 px-2'>
        <h2 className=' text-3xl text-web-blue font-bold text-center'>Proyecto 1</h2>
        <figure>
          <div className="max-w-full h-60 bg-web-gray">foto del proyecto</div>
        </figure>
        <div className="flex justify-around">
          <IconContext.Provider value={{ size: "2em" }}>
            <TbWorld />
            <SiGithub />
            <BsFillEyeFill />
          </IconContext.Provider>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Tecnologías usadas</h3>
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
        <div>
          <h3 className='text-2xl font-extrabold text-center text-web-blue leading-normal'>Descripción del Proyecto</h3>
          <p className="text-lg font-normal text-center leading-normal">Aplicativo para realizar el trackeo de recursos educativos, categorización de canales suscritos en youtube y de páginas web. </p>
        </div>
        <button className="bg-web-blue text-white font-extrabold text-3xl rounded-full w-full py-2">Ir al Proyecto</button>
      </article>

    </section>
  )
}

export default Projects 