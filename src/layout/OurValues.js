import React from 'react'
import AboutSectionTitle from '../components/AboutSectionTitle';
import ValuesIconCard from '../components/ValuesIconCard';

export default function OurValues() {
  return (
    <div
      id=""
      className="laptop:px-[118px] pb-14 tablet:py-28 laptop:pb-32 px-4"
    >
      <div className="max-w-[1200px] mx-auto">
        <AboutSectionTitle title="Our Values" />
        <div className="flex flex-col tablet:flex-row gap-6 laptop:gap-8 mt-12">
          <ValuesIconCard
            font="outlined"
            icon="people"
            value="Dedicated to Customer Care"
            text="It is important that your item be designed and framed right the first
          time. We focus on delivering an excellent experience for each and
          every one of our customers by understanding and meeting their needs"
          />
          <ValuesIconCard
            icon="filter_frames"
            value="Custom Framing Expertise"
            text="We are experts in wholesale custom, large volume, and production
                runs. We have the technology, equipment, and staff to produce
                any quantity of items for whatever you may need. We don't take
                this task lightly, we strive to achieve perfection in every
                frame."
          />
        </div>
      </div>
    </div>
  );
}
