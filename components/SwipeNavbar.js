"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const nummber = [0, 0, 0, 0, 0];

export default function SwipeNavbar() {
  return (
    <>
      <div className="mt-60 md:mt-40">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {nummber.map(() => {
            return (
              <SwiperSlide
                className=" justify-center"
                key={crypto.randomUUID()}
              >
                <img className=" m-auto" src="https://picsum.photos/1000/400" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
