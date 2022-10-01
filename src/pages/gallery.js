import React from "react";
import Footer from "../layout/Footer";
import Navigation from "../components/Navigation";
import SectionTitle from "../components/SectionTitle";
import GalleryCarousel from "../components/GalleryCarousel";

function gallery() {
  return (
    <div className="bg-secondary-dark">
      <Navigation />
      <div className="pt-[100px] h-[76vh]">
        <SectionTitle text="Our Work" />
        <div className="mt-12 w-full tablet:w-[768px] laptop:w-[1000px] mx-auto  px-4 tablet:px-6">
          <GalleryCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default gallery;
