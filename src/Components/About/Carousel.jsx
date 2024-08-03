import React from 'react'

import { Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <section>
      <Swiper
      // install Swiper modules
      modules={[ Pagination ]}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='lg:px-14 mt-2'
      breakpoints={{
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 1,
        },
        // when window width is <= 1024px
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>300+</h1>
          <p className='text-center text-[16px] text-[#ffffff] mt-2'>Happy Clients</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>20+</h1>
          <p className='text-center text-[16px] text-[#ffffff] mt-2'>Expert Trainers</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>8+</h1>
            <p className='text-center text-[16px] text-[#ffffff] mt-2'>Years of Experience</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>10+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Classes</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>300+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Happy Clients</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>20+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Expert Trainers</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>8+</h1>
            <p className='text-center text-[16px] text-[#ffffff] mt-2'>Years of Experience</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>10+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Classes</p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>300+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Happy Clients</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>20+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Expert Trainers</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>8+</h1>
            <p className='text-center text-[16px] text-[#ffffff] mt-2'>Years of Experience</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <h1 className='text-center text-[40px] font-bold text-[#ffffff] mt-3'>10+</h1>
        <p className='text-center text-[16px] text-[#ffffff] mt-2'>Classes</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Carousel