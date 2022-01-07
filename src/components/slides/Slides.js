import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import tera from "../../images/tera.svg";
import tc from "../../images/tc_gaming.svg";
import space_play from "../../images/space_play.svg";
import electros from "../../images/electros.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slides.scss";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Slides = () => {
   return (
      <>
         <Swiper
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            className="mySwiper"
            breakpoints={{
               540: {
                  slidesPerView: 1,
               },
               640: {
                  slidesPerView: 2,
               },
               1024: {
                  slidesPerView: 4,
               },
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
         >
            <SwiperSlide>
               <img src={tera} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={tc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={space_play} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={electros} alt="" />
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Slides;
