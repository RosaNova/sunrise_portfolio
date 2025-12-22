import React from "react";
import Title from "../components/Title";
import CardComponent from "../components/projects/CardComponent";
import Button from "../components/button/Button";
import { BsGithub } from "react-icons/bs";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Projects() {
  return (
    <div
      id="project"
      className="project flex flex-col  justify-center items-center gap-5 w-[90%] mx-auto h-auto"
    >
      <Title title={"My Project"} />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="w-full mt-10 flex gap-0"
        centeredSlides={window.innerWidth < 768} // Center on mobile, start on md+
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          375: { slidesPerView: 1, spaceBetween: 54 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        <SwiperSlide className=" mb-10">
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
      </Swiper>

      <Button
        title="See Github"
        text={"pl-8"}
        icon={<BsGithub className="hover:text-black absolute z-50 left-5" />}
        className="after:border-2 text-[30px] hover:text-black  after:border-yellow text-yellow before:border-2 before:border-yellow"
      ></Button>
    </div>
  );
}

export default Projects;
