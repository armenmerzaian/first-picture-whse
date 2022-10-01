import React from "react";
import InfoCard from "../components/InfoCard";
import FooterItem from "../components/FooterItem";
import StoreHours from "../components/StoreHours";

export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 bg-surface-1 ">
      <div className="flex flex-col laptop:flex-row justify-between p-8 laptop:p-12 gap-12 laptop:gap-8 text-tertiary-light max-w-[1200px] mx-auto">
        <div className="tablet:inline-flex w-full justify-between max-w-[945px] h-fit">
          <ul id="_Home" className="mb-12">
            <FooterItem link="/" label="Home" />
            <FooterItem
              link="/#our-services"
              label="Our Services"
              variant="child"
            />
            <FooterItem
              link="/#our-reviews"
              label="Our Reviews"
              variant="child"
            />
            <FooterItem link="/#faqs" label="FAQs" variant="child" />
            <FooterItem
              link="/#promotions"
              label="Promotions"
              variant="child"
            />
          </ul>
          <ul id="_Gallery" className="mb-12">
            <FooterItem link="/gallery" label="Gallery" />
            <FooterItem
              link="/gallery#ourwork"
              label="Our Work"
              variant="child"
            />
          </ul>
          <ul id="_Services" className="mb-12">
            <FooterItem link="/services" label="Services" />
            <FooterItem
              link="/services#services-offered"
              label="Services Offered"
              variant="child"
            />
            <FooterItem
              link="/services#how-we-do"
              label="How We Do Things"
              variant="child"
            />
            <FooterItem
              link="/services#benefits-of-custom"
              label="Benefits of Custom Framing"
              variant="child"
            />
          </ul>
          <ul id="_AboutUs" className="mb-12">
            <FooterItem link="/aboutUs" label="About Us" />
            <FooterItem
              link="/aboutUs#our-purpose"
              label="Our Purpose"
              variant="child"
            />
            <FooterItem
              link="/aboutUs#our-story"
              label="Our Story"
              variant="child"
            />
            <FooterItem
              link="/aboutUs#our-values"
              label="Our Values"
              variant="child"
            />
          </ul>
          <ul id="_ContactUs" className="">
            <FooterItem link="/contactUs" label="Contact Us" />
            <FooterItem
              link="/contactUs"
              label="Contact Information"
              variant="child"
            />
            <FooterItem
              link="/contactUs"
              label="Store Location"
              variant="child"
            />
          </ul>
        </div>

        <div className="border-b border-neutral-20 rounded-b-full desktop:hidden"></div>
        <div className="tablet:flex tablet:justify-around">
              <InfoCard footer={true} />
          <div className="hidden tablet:block laptop:hidden">
          <StoreHours />
          </div>
        </div>
      </div>
    </div>
  );
}
