import React from 'react'
import ActionCard from '../components/ActionCard'
import SectionTitle from '../components/SectionTitle';

export default function OurServices() {
  return (
    <div id="our-services" className="pt-32">
      <SectionTitle text="Our Services"/>

        <div
          id="action-card-stack"
          className="flex flex-col laptop:flex-row justify-center items-center gap-6 mt-12"
        >
          <ActionCard
            title="Retail"
            text="Our staff will assist you in choosing the right frame, matting, and glazing for you and your artwork."
          />
          <ActionCard
            title="Wholesale"
            text="We sell large quantities of custom picture frames and framing supplies to retail stores at a discounted rate."
          />
          <ActionCard
            title="Production"
            text="Our staff will custom frame the same item in bulk for businesses, art galleries, banks, school graduation pictures and more."
          />
        </div>
    </div>
  );
}
