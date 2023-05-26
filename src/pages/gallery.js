import React from "react";
import Footer from "../layout/Footer";
import Navigation from "../components/Navigation";
import SectionTitle from "../components/SectionTitle";
import GalleryCarousel from "../components/GalleryCarousel";

function gallery() {
  return (
    <div className="bg-secondary-dark">
      <Navigation />
      <div className="pt-[100px] laptop:pt-[140px] h-[87vh] tablet:h-[130vh]">
        <SectionTitle text="Our Work" />
          <div className="mt-12 w-[80%] tablet:w-[768px] laptop:w-[800px] mx-auto">
            <GalleryCarousel />
        </div>
      </div>
      <div className="pt-8 laptop:pt-28">
        <Footer />
      </div>
    </div>
  );
}

export default gallery;
