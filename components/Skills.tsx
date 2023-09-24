'use client'
import React from 'react'

import cssLogo from '@/public/css_logo.svg';
import htmlLogo from '@/public/html_logo.svg';
import javascriptLogo from '@/public/javascript_logo.svg';
import reactLogo from '@/public/react_logo.svg';
import typescriptLogo from '@/public/typescript_logo.svg';
import phpLogo from '@/public/php_logo.svg';
import laravelLogo from '@/public/laravel_logo.svg';
import mysqlLogo from '@/public/mysql_logo.svg';
import sqlserverLogo from '@/public/sqlserver_logo.svg';
import phpunitLogo from '@/public/phpunit_logo.svg';
import postmanLogo from '@/public/postman_logo.svg';
import reactTestingLibraryLogo from '@/public/reacttestinglibrary_logo.svg';
import digitalOceanLogo from '@/public/digitalocean_logo.svg';

import SkillCarrousel from './SkillCarrousel';
import SkillsCard from './SkillsCard';
import Typography from './Typography';

const Skills = () => {
  const logosFrontEnd = [{
    id: 'css',
    logo: cssLogo,
    alt: 'CSS Logo',
    name: "css"
  },
  {
    id: 'javascript',
    logo: javascriptLogo,
    alt: 'Javascript Logo',
    name: "javascript"
  },
  {
    id: 'html',
    logo: htmlLogo,
    alt: 'HTML Logo',
    name: "html"
  },
  {
    id: 'react',
    logo: reactLogo,
    alt: 'React Logo',
    name: "react"
  },
  {
    id: 'typescript',
    logo: typescriptLogo,
    alt: 'Typescript Logo',
    name: "typescript"
  }];

  const logosBackEnd = [{
    id: 'php',
    logo: phpLogo,
    alt: 'Php Logo',
    name: "php"
  },
  {
    id: 'laravel',
    logo: laravelLogo,
    alt: 'Laravel Logo',
    name: "laravel"
  }];

  const logosDatabase = [{
    id: 'mysql',
    logo: mysqlLogo,
    alt: 'MySql Logo',
    name: "mysql"
  },
  {
    id: 'sqlserver',
    logo: sqlserverLogo,
    alt: 'SQL Server Logo',
    name: "sql server"
  }];

  const logosTesting = [{
    id: 'phpunit',
    logo: phpunitLogo,
    alt: 'Php Unit Logo',
    name: "php unit"
  },
  {
    id: 'postman',
    logo: postmanLogo,
    alt: 'Postman Logo',
    name: "postman"
  },
  {
    id: 'reacttestinglibrary',
    logo: reactTestingLibraryLogo,
    alt: 'React Testing Library Logo',
    name: "react testing library"
  }];

  const logosServer = [{
    id: 'digitalocean',
    logo: digitalOceanLogo,
    alt: 'Digital Ocean Logo',
    name: "digital ocean"
  }];



  return (
    <section className='uppercase text-[1.5rem] font-bold flex flex-col items-center mt-16 min-w-full gap-14'>
      <Typography variant='h1' className="normal-case">
        Mis Habilidades
      </Typography>
      <div className='w-full flex flex-col gap-16'>
        <article className="flex flex-col bg-web-white rounded-xl shadow-xl gap-8 py-5">
          <Typography variant='h2' className='bg-clip-text text-transparent bg-gradient-to-r from-web-light-blue from-35% to-web-blue to-80%'>
            front-end
          </Typography>
          <div className='w-full flex flex-wrap justify-center h-full gap-5 items-center'>
            {logosFrontEnd.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
          </div>
        </article>

        <article className="flex flex-col bg-web-white rounded-xl shadow-xl gap-8 py-5">
          <Typography variant='h2' className='bg-clip-text text-transparent bg-gradient-to-r from-web-light-blue from-35% to-web-blue to-80%'>
            back-end
          </Typography>
          <div className='w-full flex flex-wrap justify-center h-full gap-5 items-center'>
            {logosBackEnd.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
          </div>
        </article>

        <article className="flex flex-col bg-web-white rounded-xl shadow-xl gap-8 py-5">
          <Typography variant='h2' className='bg-clip-text text-transparent bg-gradient-to-r from-web-light-blue from-35% to-web-blue to-80%'>
            bases de datos
          </Typography>
          <div className='w-full flex flex-wrap justify-center h-full gap-5 items-center'>
            {logosDatabase.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
          </div>
        </article>

        <article className="flex flex-col bg-web-white rounded-xl shadow-xl gap-8 py-5">
          <Typography variant='h2' className='bg-clip-text text-transparent bg-gradient-to-r from-web-light-blue from-35% to-web-blue to-80%'>
            Testing
          </Typography>
          <div className='w-full flex flex-wrap justify-center h-full gap-5 items-center'>
            {logosTesting.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
          </div>
        </article>

        <article className="flex flex-col bg-web-white rounded-xl shadow-xl gap-8 py-5">
          <Typography variant='h2' className='bg-clip-text text-transparent bg-gradient-to-r from-web-light-blue from-35% to-web-blue to-80%'>
            Servidores
          </Typography>
          <div className='w-full flex flex-wrap justify-center h-full gap-5 items-center'>
            {logosServer.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills