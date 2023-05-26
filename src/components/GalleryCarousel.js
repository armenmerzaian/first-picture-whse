import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/GalleryCarousel.css";
import {
  EffectCards,
  Navigation,
  Pagination,
  navigationNext,
  navigationPrev,
} from "swiper";

const gallery = [
  "images/frame_1.jpg",
  "images/frame_2.jpg",
  "images/frame_3.jpg",
  "images/frame_4.jpg",
  "images/frame_5.jpg",
];

export default function GalleryCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  const handleNavigationNext = () => {
    if (activeSlide === gallery.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleNavigationPrevious = () => {
    if(activeSlide === 0){
      setActiveSlide(gallery.length - 1);
    } else {
    setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <Swiper
      effect="cards"
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
      on={{
        slideChange: handleSlideChange,
      }}
    >
      {gallery.map((url, key) => (
        <SwiperSlide
          key={key}
          className={`rounded-[24px] laptop:rounded-[40px] ${
            activeSlide !== key ? "brightness-50" : ""
          }`}
        >
          <img src={url} className="swiper-lazy" />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      ))}

      <div className="">
        <svg
          className="custom-swiper-button-prev cursor-pointer absolute bottom-2 left-[25%] laptop:left-[35%] z-50 swiper-button-disabled"
          onClick={handleNavigationPrevious}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          fill="rgb(153 153 153)"
        >
          <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
        </svg>
        <svg
          className="custom-swiper-button-next cursor-pointer absolute bottom-2 right-[25%] laptop:right-[35%] z-50"
          onClick={handleNavigationNext}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          fill="rgb(153 153 153)"
        >
          <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
        </svg>
      </div>
    </Swiper>
  );
}
