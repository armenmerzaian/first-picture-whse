import React from 'react'
import ReviewCardCarousel from '../components/ReviewCardCarousel';
import SectionTitle from '../components/SectionTitle';


export default function OurReviews() {
  return (
    <div id="our-reviews" className="pt-24 laptop:pt-[6rem]">
      <h4
        id=""
        className="text-lg font-regular text-tertiary-light/38 mt-24 text-center"
      >
        WHAT OUR CUSTOMERS HAVE TO SAY
      </h4>
      <SectionTitle text="Our Reviews" />

      <div className="mt-[48px] laptop:mt-[64px]">
        <ReviewCardCarousel />
      </div>
    </div>
  );
}
