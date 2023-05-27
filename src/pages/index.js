import React from "react";
import Footer from "../layout/Footer";
import Navigation from "../components/Navigation";
import OurServices from "../layout/OurServices";
import OurReviews from "../layout/OurReviews";
import FAQs from "../layout/FAQs";
import Hero from "../components/Hero";
import BreadCrumb from "../components/BreadCrumb";

const crumbs = [
  {
    title: "Services",
    link: "/#our-services",
  },
  {
    title: "Reviews",
    link: "/#our-reviews",
  },
  {
    title: "FAQs",
    link: "/#faqs",
  }
];

export default function IndexPage() {
  return (
    <div className="bg-secondary-dark">
      <Navigation />
      <BreadCrumb crumbs={crumbs}/>
      <div className="pt-[100px] laptop:pt-[168px] desktop:[pt-200px] pb-36 px-4 tablet:px-6">
        <Hero
          subtitle="We are ready for any custom framing challenge. With our knowledge and expertise, we strive to make your framing dreams come true!"
          img="images/index_hero.jpg"
          jumpLink="/#our-services"
          mobileSubtitle={false}
        >
          <p className="text-tertiary-light text-4xl tablet:text-5xl desktop:text-7xl leading-[48px] font-bold text-center laptop:text-left mb-6">
            High-quality custom framing{" "}
            <span className="hidden laptop:inline-block">services</span>{" "}
            <span className="desktop:block">
              since <span className="text-primary-55">1984.</span>
            </span>
          </p>
        </Hero>
        <div id="below-the-fold">
          <OurServices />

          <OurReviews />

          <FAQs />

        </div>
      </div>
      <Footer />
    </div>
  );
}
