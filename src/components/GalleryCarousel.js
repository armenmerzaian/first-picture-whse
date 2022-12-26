import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/GalleryCarousel.css"

// import required modules
import { EffectCards, Navigation, Pagination, navigationNext, navigationPrev } from "swiper";

const gallery = [
  "images/in-the-making-studio-0UKym2nB78I-unsplash.jpg",
  "images/intenza-fitness-fkS8l7CSGY4-unsplash.jpg",
  "images/marek-okon-RdTCTv_iCbE-unsplash.jpg",
  "images/rumman-amin-5zoLQUZaWgA-unsplash.jpg",
  "images/taru-goyal-lZVBjYeeEu0-unsplash.jpg",
];

const swiperStyle = {

}

export default function GalleryCarousel() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination]}
      className="mySwiper"
      centeredSlides={true}
      navigation={{
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      loop={true}
      preloadImages={false}
      lazy={{
        enabled: true,
        loadPrevNext: true,
        loadPrevNextAmount: 2
      }}
    >
      {gallery.map((url, key) => {
        return (
          <SwiperSlide
            key={key}
            className="rounded-[24px] laptop:rounded-[40px]"
          >
            <img src={url} className="swiper-lazy" />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
        );
      })}
      <div className="h-[76px]"></div>
      {/* <span
        className="custom-swiper-button-prev material-icons-outlined cursor-pointer text-3xl text-neutral-60 hover:text-neutral-80 absolute bottom-0 left-[25%] laptop:left-[37%] z-50 swiper-button-disabled"
        onClick={navigationPrev}
      >
        arrow_back
      </span> */}
      
      <svg className="custom-swiper-button-prev material-icons-outlined cursor-pointer text-3xl text-neutral-60 hover:text-neutral-80 absolute bottom-0 left-[25%] laptop:left-[37%] z-50 swiper-button-disabled"
        onClick={navigationPrev} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/></svg>
      
      {/* <span
        className="custom-swiper-button-next material-icons-outlined cursor-pointer text-3xl text-neutral-60 hover:text-neutral-80 absolute bottom-0 right-[25%] laptop:right-[37%] z-50"
        onClick={navigationNext}
      >
        arrow_forward
      </span> */}
      
        <svg className="custom-swiper-button-next material-icons-outlined cursor-pointer text-3xl text-neutral-60 hover:text-neutral-80 absolute bottom-0 right-[25%] laptop:right-[37%] z-50"
        onClick={navigationNext} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
       
      
    </Swiper>
  );
}
