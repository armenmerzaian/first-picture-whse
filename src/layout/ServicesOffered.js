import React from 'react'
import SectionTitle from '../components/SectionTitle';
import ServicesTabbed from '../components/ServicesTabbed';

export default function ServicesOffered() {

  return (
    <div id="services-offered" className="pt-40">
      <SectionTitle text="Services We Offer" />

      <div className="hidden laptop:block mt-16">
        <ServicesTabbed />
      </div>
    </div>
  );
}
