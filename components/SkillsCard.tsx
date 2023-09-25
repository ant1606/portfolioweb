import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Typography from './Typography';

interface Props {
  image: StaticImageData;
  alt: string;
  name: string;
}
const SkillsCard: React.FC<Props> = ({ image, alt, name }) => {
  return (
    <div
      className='rounded-xl overflow-hidden flex flex-col gap-1
        w-[120px] h-[120px] sm:w-[180px] md:w-[200px] hover:shadow-lg relative group'
    >
      <div className='relative h-full w-full mb-10'>
        <Image alt={alt} src={image} fill={true} className='object-scale-down' />
      </div>
      <div
        className="bg-web-blue text-web-white h-8 flex justify-center items-center w-full px-1 absolute bottom-0 transition-all ease-out delay-300 
        group-hover:h-16 sm:group-hover:h-12"
      >
        <Typography
          variant='p'
          className='text-lg truncate  group-hover:whitespace-break-spaces group-hover:text-clip group-hover:text-center group-hover:text-base sm:group-hover:text-lg'
        >
          {name}
        </Typography>
      </div>
    </div>
  )
}

export default SkillsCard