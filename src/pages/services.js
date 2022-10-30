import React from 'react'
import Footer from '../layout/Footer';
import Navigation from '../components/Navigation';
import HowWeDo from '../layout/HowWeDo';
import BenefitsCustom from '../layout/BenefitsCustom';
import ServicesOffered from '../layout/ServicesOffered';
import Hero from '../components/Hero';
import BreadCrumb from '../components/BreadCrumb';

function services() {

  const crumbs = [
    {
      title: "Services Offered",
      link: "/services#services-offered",
    },
    {
      title: "How We Do Things",
      link: "/services#how-we-do",
    },
    {
      title: "Benefits of Custom",
      link: "/services#benefits-of-custom",
    },
  ];

  return (
    <>
      <Navigation />
      <BreadCrumb crumbs={crumbs}/>
      <div className="pt-[100px] laptop:pt-[196px] pb-[162px] bg-secondary-dark text-tertiary-light px-4">
        <Hero
          subtitle="We are ready for any custom framing challenge. With our knowledge and expertise, we strive to make your framing dreams come true!"
          img="images/hero-image.png"
          jumpLink="/services#services-offered"
          dblBtn={false}
        >
          <p className="text-primary-85 text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl leading-[48px] font-bold text-center laptop:text-left mb-6">
            Our Services
          </p>
        </Hero>

        <div className="hidden laptop:block">
          <ServicesOffered />
        </div>
        <div>
          <HowWeDo />
        </div>
        <div className="">
          <BenefitsCustom />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default services
