import React from 'react'
import IconCard from '../components/IconCard';
import SectionTitle from '../components/SectionTitle';

export default function BenefitsCustom() {
  return (
    <div id="benefits-of-custom" className="pt-24">
      <SectionTitle text="Benefits of Custom Framing" />
      <div
        id="icon-card-group"
        className="grid grid-cols-2 desktop:grid-cols-4 gap-4 laptop:gap-12 mt-28 w-fit mx-auto"
      >
        <IconCard
          className=""
          title="Expertise"
          text="Professional custom framers know the best practices on how to build frames for optimal results."
        >
          <span className="material-icons text-4xl">book</span>
        </IconCard>
        <IconCard
          className=""
          title="Personalization"
          text="Custom framing is a way of expressing your taste and enhancing the visual aesthetic of your art."
        >
          <span className="material-icons text-4xl">brush</span>
        </IconCard>
        <IconCard
          className=""
          title="High-Quality"
          text="We use certain tools and techniques which results in higher quality frames that look better and last longer."
        >
          <span className="material-icons-outlined text-4xl">
            verified_user
          </span>
        </IconCard>
        <IconCard
          className=""
          title="Protection"
          text="Custom framing helps prevent your pieces from fading, breaking down, and becoming damaged."
        >
          <span class="material-icons text-4xl">security</span>
        </IconCard>
      </div>

    </div>
  );
}
