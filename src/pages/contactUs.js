import React from "react";
import Footer from "../layout/Footer";
import ScreenSize from "../components/ScreenSize";
import Navigation from "../components/Navigation";
import InfoCard from "../components/InfoCard";
import StoreHours from "../components/StoreHours";
import ContactForm from "../layout/ContactForm";
import SectionTitle from "../components/SectionTitle";

function contactUs() {
  return (
    <>
      <Navigation />
      <div className="pt-[171px] pb-[162px] bg-secondary-dark px-4">
        <SectionTitle text="Contact Us" />
        <div className="flex gap-6 flex-col laptop:flex-row laptop:gap-8 laptop:bg-surface-1 laptop:p-8 max-w-fit rounded-2xl mx-auto mt-16">
          <div className="flex flex-col gap-6 laptop:gap-8 laptopL:justify-between">
            <div className="">
              <InfoCard />
            </div>
            <div className="">
              <StoreHours />
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
      <ScreenSize />
    </>
  );
}

export default contactUs;
