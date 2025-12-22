import React from "react";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import Title from "../components/Title";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div className="md:px-10 px-4  w-full m-auto ">
      <Title title={"Testimonials"} />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="w-full h-full mt-10 flex gap-0 "
        centeredSlides={window.innerWidth < 768}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          375: { slidesPerView: 1, spaceBetween: 54 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide className="overflow-visible py-10">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="overflow-visible py-10">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="overflow-visible py-10">
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
