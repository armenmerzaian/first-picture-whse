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
        loadPrevNextAmount: 2,
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

      <svg
        className="custom-swiper-button-prev cursor-pointer absolute bottom-2 left-[25%] laptop:left-[35%] z-50 swiper-button-disabled"
        onClick={navigationPrev}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        fill="rgb(153 153 153)"
      >
        <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
      </svg>

      <svg
        className="custom-swiper-button-next cursor-pointer absolute bottom-2 right-[25%] laptop:right-[35%] z-50"
        onClick={navigationNext}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        fill="rgb(153 153 153)"
      >
        <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
      </svg>
    </Swiper>
  );
}
