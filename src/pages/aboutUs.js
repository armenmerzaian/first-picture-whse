import React from 'react'
import Footer from '../layout/Footer';
import Navigation from '../components/Navigation';
import OurPurpose from '../layout/OurPurpose';
import OurValues from '../layout/OurValues';
import OurHistory from "../layout/OutHistory";
import Hero from '../components/Hero';
import BreadCrumb from '../components/BreadCrumb';

const crumbs = [
  {
    title: "Our Purpose",
    link: "/aboutUs#our-purpose",
  },
  {
    title: "Our Story",
    link: "/aboutUs#our-story",
  },
  {
    title: "Our Values",
    link: "/aboutUs#our-values",
  },
];

function aboutUs() {
  return (
    <>
      <Navigation />
      <BreadCrumb crumbs={crumbs} />
      <div className="pt-[100px] laptop:pt-[196px] pb-[162px] bg-secondary-dark text-tertiary-light px-4">
        <Hero
          subtitle="Our mission is to fulfill our customers' custom framing needs. We take pride in knowing we've delivered custom framing solutions consistently for over 30 years, no matter the difficulty of the challenge we faced."
          img="images/hero-image.png"
          jumpLink="/aboutUs#our-purpose"
          dblBtn={false}
        >
          <p className="text-tertiary-light text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl leading-[48px] font-bold text-center laptop:text-left px-6 laptop:pl-0 mb-6">
            About Us
          </p>
        </Hero>

        <div id="our-purpose" className="pt-[20px]">
          <div id="" className="border-y border-neutral-20 mt-[120px]">
            <OurPurpose />
          </div>
        </div>
        <div id="our-story" className="laptop:pt-[140px]">
          <OurHistory />
        </div>
        <div id="our-values" className="border-t border-neutral-20 pt-[100px]">
          <OurValues />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default aboutUs
