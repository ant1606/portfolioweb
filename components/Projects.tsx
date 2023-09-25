'use client';
import React from 'react'
import Typography from './Typography';
import ProjectItem, { Project } from './ProjectItem';
import noImage from '@/public/no_image.jpg';
const projects: Project[] = [
  {
    title: "Gestor de Recursos Educativos",
    image: noImage,
    link: "127.0.0.1",
    technologies: ["react", "typescript", "laravel", "php", "mysql", "tailwind"],
    githubRepo: "https://github.com/ant1606/webJade",
    description: "Aplicativo para realizar el trackeo de recursos educativos, categorización de canales suscritos en youtube y de páginas web.",
  },
  {
    title: "GymTrackerProgress",
    image: noImage,
    link: "127.0.0.2",
    technologies: ["react", "typescript", "docker"],
    githubRepo: "https://github.com/ant1606/CalidadSofware_PryLibJenny",
    description: "App para hacer el seguimiento de las rutinas de ejercicio",
  }
]
const Projects = () => {
  return (
    <section id="portafolio"
      className='min-w-full flex flex-col gap-10 items-center'>
      <Typography variant="h1" className="mt-20 sm:order-first sm:col-span-2 lg:-order-none">
        Mis Proyectos
      </Typography>
      <div className='flex flex-col gap-8 sm:bg-web-blue sm:p-3 '>
        {projects.map(project =>
          <ProjectItem
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
            technologies={project.technologies}
            githubRepo={project.githubRepo}
            description={project.description}
          />
        )}
      </div>
    </section>
  )
}

export default Projects 