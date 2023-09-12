'use client'
import React from 'react'

import cssLogo from '@/public/css_logo.png';
import htmlLogo from '@/public/html_logo.png';
import javascriptLogo from '@/public/javascript_logo.png';
import reactLogo from '@/public/react_logo.png';
import typescriptLogo from '@/public/typescript_logo.svg';
import phpLogo from '@/public/php_logo.png';
import laravelLogo from '@/public/laravel_logo.png';
import mysqlLogo from '@/public/mysql_logo.png';
import sqlserverLogo from '@/public/sqlserver_logo.png';
import phpunitLogo from '@/public/phpunit_logo.png';
import postmanLogo from '@/public/postman_logo.png';
import reactTestingLibraryLogo from '@/public/reacttestinglibrary_logo.png';
import digitalOceanLogo from '@/public/digitalocean_logo.png';

import SkillCarrousel from './SkillCarrousel';

const Skills = () => {
  const logosFrontEnd = [{
    id: 'css',
    logo: cssLogo,
    alt: 'CSS Logo',
  },
  {
    id: 'javascript',
    logo: javascriptLogo,
    alt: 'Javascript Logo',
  },
  {
    id: 'html',
    logo: htmlLogo,
    alt: 'HTML Logo',
  },
  {
    id: 'react',
    logo: reactLogo,
    alt: 'React Logo',
  },
  {
    id: 'typescript',
    logo: typescriptLogo,
    alt: 'Typescript Logo',
  }];

  const logosBackEnd = [{
    id: 'php',
    logo: phpLogo,
    alt: 'Php Logo',
  },
  {
    id: 'laravel',
    logo: laravelLogo,
    alt: 'Laravel Logo',
  }];

  const logosDatabase = [{
    id: 'mysql',
    logo: mysqlLogo,
    alt: 'MySql Logo',
  },
  {
    id: 'sqlserver',
    logo: sqlserverLogo,
    alt: 'SQL Server Logo',
  }];

  const logosTesting = [{
    id: 'phpunit',
    logo: phpunitLogo,
    alt: 'Php Unit Logo',
  },
  {
    id: 'postman',
    logo: postmanLogo,
    alt: 'Postman Logo',
  },
  {
    id: 'reacttestinglibrary',
    logo: reactTestingLibraryLogo,
    alt: 'React Testing Library Logo',
  }];

  const logosServer = [{
    id: 'digitalocean',
    logo: digitalOceanLogo,
    alt: 'Digital Ocean Logo',
  }];



  return (
    <section className='uppercase text-[1.5rem] font-bold flex flex-col items-center mt-16 min-w-full'>
      <h2 className='normal-case font-black text-[2.35rem]'>Mis Habilidades</h2>
      <article className="flex flex-col  min-w-full items-center overflow-hidden">
        <h3>front-end</h3>
        <div className='w-screen h-56'>
          <SkillCarrousel arrayLogos={logosFrontEnd} />
        </div>
      </article>
      <article>
        <h3>back-end</h3>
        <div className='w-screen h-56'>
          <SkillCarrousel arrayLogos={logosBackEnd} />
        </div>
      </article>
      <article>
        <h3>base de datos</h3>
        <div className='w-screen h-56'>
          <SkillCarrousel arrayLogos={logosDatabase} />
        </div>
      </article>
      <article>
        <h3>Testing</h3>
        <div className='w-screen h-56'>
          <SkillCarrousel arrayLogos={logosTesting} />
        </div>
      </article>
      <article>
        <h3>Servidores</h3>
        <div className='w-screen h-56'>
          <SkillCarrousel arrayLogos={logosServer} />
        </div>
      </article>
    </section>
  )
}

export default Skills