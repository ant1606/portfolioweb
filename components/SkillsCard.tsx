import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Typography from './Typography';

interface Props {
  image: StaticImageData;
  alt: string;
  name: string
}
const SkillsCard: React.FC<Props> = ({ image, alt, name }) => {
  return (
    <div
      className='border-2 pt-4 border-web-white rounded-xl overflow-hidden  flex flex-col gap-3 
        sm:w-[250px] md:w-[200px]'
    >
      <div className='relative h-36'>
        <Image alt={alt} src={image} fill={true} className='object-scale-down' />
      </div>
      <div className="bg-web-blue text-web-white text-center h-10">
        <Typography variant='p'>{name}</Typography>
      </div>
    </div>
  )
}

export default SkillsCard