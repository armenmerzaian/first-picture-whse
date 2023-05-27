import React from 'react'
import ActionCard from '../components/ActionCard'
import SectionTitle from '../components/SectionTitle';

export default function OurServices() {
  return (
    <div id="our-services" className="pt-32">
      <SectionTitle text="Our Services" />

      <div
        id="action-card-stack"
        className="flex flex-col laptop:flex-row justify-center items-center gap-6 mt-12 mx-[80px] laptop:mx-auto max-w-[1088px] desktop:max-w-[1204px]"
      >
        <ActionCard
          img="images/index_retail.jpg"
          title="Retail"
          text="For home owners, designers, offices or anyone looking to frame a poster, limited edition print, needle point, canvas, sports jersey or almost anything you want to enhance and bring to life in your space."
        />
        <ActionCard
          img="images/index_wholesale.jpg"
          title="Wholesale"
          text="For designers, photographers, galleries, artists and other business looking to establish a relationship in great quality custom framing, either single or bulk."
        />
        <ActionCard
          img="images/index_production.jpg"
          title="Production"
          text="For institutions, banks, hotels, schools or other organizations who need large quantities of framing whether that's a simple diploma or elaborate memorabilia and almost anything in-between."
        />
      </div>
    </div>
  );
}
