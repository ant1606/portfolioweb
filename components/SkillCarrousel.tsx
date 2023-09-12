import Image from 'next/image';
import React, { useRef } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface Props {
  arrayLogos: any;
}
//TODO Arreglar el carrousel
const SkillCarrousel: React.FC<Props> = ({ arrayLogos }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const customSlidesPerView = arrayLogos.length > 1 ? 3 : 'auto';
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {arrayLogos.map((logo: any) => (
          <SwiperSlide key={logo.id}>
            <Image alt={logo.alt} src={logo.logo} />
          </SwiperSlide>))
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}

export default SkillCarrousel