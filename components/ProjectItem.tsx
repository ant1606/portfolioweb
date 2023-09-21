import React from 'react'
import Typography from './Typography'
import Image, { StaticImageData } from 'next/image'
import { IconContext } from 'react-icons'
import { TbWorld } from 'react-icons/tb'
// import { BsFillEyeFill } from 'react-icons/bs'
import { SiJavascript, SiDocker, SiHtml5, SiTailwindcss, SiCss3, SiLaravel, SiPhp, SiGithub, SiReact, SiTypescript, SiMysql, SiMicrosoftsqlserver, SiPostman, SiMongodb } from "react-icons/si";
import Link from 'next/link'
export interface Project {
  title: string;
  image: StaticImageData;
  link: string;
  technologies: Array<TechnologiesOptions>;
  githubRepo: string;
  description: string;
}

type TechnologiesOptions = 'javascript' | 'docker' | 'html' | 'tailwind' | 'css' | 'laravel' | 'php';
// https://react-icons.github.io/react-icons/icons?name=si
const technologyIcons = {
  javascript: <SiJavascript />,
  docker: <SiDocker />,
  html: <SiHtml5 />,
  tailwind: <SiTailwindcss />,
  css: <SiCss3 />,
  laravel: <SiLaravel />,
  php: <SiPhp />,
  react: <SiReact />,
  typescript: <SiTypescript />,
  mysql: <SiMysql />,
  sqlserver: <SiMicrosoftsqlserver />,
  postman: <SiPostman />,
  mongo: <SiMongodb />
}
const ProjectItem: React.FC<Project> = ({
  title,
  image,
  link,
  technologies,
  githubRepo,
  description,
}) => {
  return (
    <article
      className='bg-web-white rounded-xl py-5 flex flex-col gap-4 px-2 
          sm:grid sm:grid-cols-3 lg:h-[300px]'
    >
      <Typography variant='h2' className="text-web-blue sm:order-2 sm:col-span-2">{title}</Typography>
      <div className="flex flex-col gap-5 sm:row-start-1 sm:row-span-4 sm:order-1">
        <figure className="relative min-w-full min-h-[200px] overflow-hidden">
          <Image alt="no image" src={image} fill={true} className='object-cover' />
        </figure>
        <div className="flex items-start justify-around sm:order-5 ">
          <IconContext.Provider value={{ size: "2em" }}>
            <Link href={link} target='_blank'>
              <TbWorld />
            </Link>
            <Link href={githubRepo} target='_blank'>
              <SiGithub />
            </Link>
            {/* <BsFillEyeFill /> */}
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:order-3 sm:col-span-2 lg:flex-row lg:py-5">
        <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Tecnologías usadas</Typography>
        <IconContext.Provider value={{ size: "2em" }}>
          <div className="flex justify-around flex-wrap gap-5 ">
            {technologies.map((technology, index) => (
              <div key={index}>{technologyIcons[technology]}</div>
            ))}
            {/* <SiJavascript />
            <SiDocker />
            <SiHtml5 />
            <SiTailwindcss />
            <SiCss3 />
            <SiLaravel />
            <SiPhp /> */}
          </div>
        </IconContext.Provider>

      </div>
      <div className='sm:order-4  sm:col-span-2 lg:flex '>
        <Typography variant='h3' className='text-web-blue sm:text-left lg:min-w-[300px]'>Descripción del Proyecto</Typography>
        <Typography variant='p' className='text-lg font-normal text-center leading-normal sm:text-left'>
          {description}
        </Typography>
      </div>
      <button className="bg-web-blue text-white font-extrabold text-2xl rounded-2xl w-full py-2 sm:hidden">Ir al Proyecto</button>
    </article>
  )
}

export default ProjectItem