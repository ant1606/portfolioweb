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
      {/* <h2 className='normal-case font-black text-[2.35rem] text-center'>Mis Habilidades</h2> */}
      <Typography variant='h1' className="normal-case">
        Mis Habilidades
      </Typography>
      <div className="flex flex-col md:flex-row md:justify-around md:w-full md:flex-wrap ">
        <article className="flex flex-col min-w-full items-center overflow-hidden md:min-w-fit">
          <Typography variant='h2'>
            front-end
          </Typography>
          <div className='w-full flex flex-col gap-8 sm:flex-row  sm:flex-wrap sm:justify-center md:flex-col'>
            {logosFrontEnd.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
            {/* <SkillCarrousel arrayLogos={logosFrontEnd} /> */}
          </div>
        </article>
        <article className="flex flex-col  min-w-full items-center overflow-hidden md:min-w-fit">
          <Typography variant='h2'>
            back-end
          </Typography>
          <div className='w-full flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center md:flex-col'>
            {logosBackEnd.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
            {/* <SkillCarrousel arrayLogos={logosBackEnd} /> */}
          </div>
        </article>
        <article className="flex flex-col  min-w-full items-center overflow-hidden md:min-w-fit">
          <Typography variant='h2'>
            bases de datos
          </Typography>
          <div className='w-full flex flex-col gap-8  sm:flex-row  sm:flex-wrap sm:justify-center md:flex-col'>
            {logosDatabase.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
            {/* <SkillCarrousel arrayLogos={logosDatabase} /> */}
          </div>
        </article>
        <article className="flex flex-col  min-w-full items-center overflow-hidden md:min-w-fit">
          <Typography variant='h2'>
            Testing
          </Typography>
          <div className='w-full flex flex-col gap-8  sm:flex-row  sm:flex-wrap sm:justify-center md:flex-col'>
            {logosTesting.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
            {/* <SkillCarrousel arrayLogos={logosTesting} /> */}
          </div>
        </article>
        <article className="flex flex-col  min-w-full items-center overflow-hidden md:min-w-fit">
          <Typography variant='h2'>
            Servidores
          </Typography>
          <div className='w-full flex flex-col gap-8  sm:flex-row  sm:flex-wrap sm:justify-center md:flex-col'>
            {logosServer.map(logo =>
              <SkillsCard key={logo.id} alt={logo.alt} image={logo.logo} name={logo.name} />
            )}
            {/* <SkillCarrousel arrayLogos={logosServer} /> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills