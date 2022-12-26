import React from 'react'
import SectionTitle from '../components/SectionTitle';
import SubscribeForm from '../components/SubscribeForm';

export default function OurAppreciation() {
  return (
    <div id="promotions" className="pt-[9rem]">
      <SectionTitle text="Promotions" />

      <div className="max-w-[1204px] tablet:bg-surface-1 tablet:mt-16 mx-auto rounded-2xl tablet:p-[40px] laptop:p-12 tablet:flex tablet:gap-[72px] laptop:gap-0 justify-between items-center">
        <div className="tablet:max-w-[528px]">
          <h2 className="text-2xl laptop:text-4xl pt-12 tablet:p-0 text-center tablet:text-left text-tertiary-light/87">
            For our <span className="text-primary-55">loyal</span> customers
          </h2>
          <p className="text-base laptop:text-xl leading-6 text-center tablet:text-left font-light mt-2 text-tertiary-light/87 laptop:text-tertiary-light/38">
            We want to show our appreciation towards you by offering promotions
            through our email newsletter. You can use these when you visit us.
          </p>
        </div>
        <div className="tablet:w-[394px] mt-6 tablet:mt-0">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
