import React from 'react'
import BlogItems from './BlogItems'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from '../button/Button';
import { GoArrowUpRight } from "react-icons/go";


const BlogContainer = () => {
  return (
     <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="flex gap-10 text-center my-[70px]"
            centeredSlides={window.innerWidth < 768} // Center on mobile, start on md+
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              375: { slidesPerView: 1, spaceBetween: 54 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
       
        <SwiperSlide className='pb-24 mb-10'>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>

         <Button
        title="See More"
        text={"pl-8"}
        icon={<GoArrowUpRight className='text-4xl absolute z-50 left-5 hover:text-black font-bold' />}
        className="after:border-2 text-[30px] hover:text-black  after:border-yellow text-yellow before:border-2 before:border-yellow"
      ></Button>
        </Swiper>
   
  )
}

export default BlogContainer