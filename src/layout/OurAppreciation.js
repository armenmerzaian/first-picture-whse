import React from 'react'
import SectionTitle from '../components/SectionTitle';
import SubscribeForm from '../components/SubscribeForm';

export default function OurAppreciation() {
  return (
    <div id="promotions" className="pt-[9rem]">
    <SectionTitle text="Promotions" />

      <div className="max-w-[1204px] desktop:bg-surface-1 desktop:mt-16 mx-auto rounded-2xl desktop:p-12 desktop:flex justify-between items-baseline">
        <div className="desktop:max-w-[528px]">
          <h2 className="text-4xl pt-12 desktop:p-0 text-center desktop:text-left text-tertiary-light/87">
            For our <span className="text-primary-55">loyal</span> customers
          </h2>
          <p className="text-base leading-6 text-center desktop:text-left font-light mt-2 text-tertiary-light/87">
            We want to show our appreciation towards you by offering promotions
            through our email newsletter. You can use these when you visit us.
          </p>
        </div>
        <div className="mt-8 desktop:w-[394px]">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
