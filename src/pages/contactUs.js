import React from "react";
import Footer from "../layout/Footer";
import Navigation from "../components/Navigation";
import InfoCard from "../components/InfoCard";
import StoreHours from "../components/StoreHours";
import ContactForm from "../layout/ContactForm";
import SectionTitle from "../components/SectionTitle";

function contactUs() {
  return (
    <>
      <Navigation />
      <div className="pt-[171px] pb-[162px] bg-secondary-dark px-4 tablet:px-12">
        <SectionTitle text="Contact Us" />
        <div className="flex gap-6 flex-col laptop:flex-row laptop:gap-8 tablet:bg-surface-1 tablet:p-6 rounded-2xl mx-auto mt-16 w-fit">
          <div className="flex flex-col sketch:flex-row laptop:flex-col gap-6 laptop:gap-8">
            <InfoCard />
            <StoreHours />
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default contactUs;
