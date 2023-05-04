import React from 'react'
import IconCard from '../components/IconCard';
import SectionTitle from '../components/SectionTitle';

export default function BenefitsCustom() {
  return (
    <div id="benefits-of-custom" className="pt-24">
      <SectionTitle text="Benefits of Custom Framing" />
      <div
        id="icon-card-group"
        className="grid grid-cols-2 laptop:grid-cols-4 gap-4 laptop:gap-12 mt-28 w-fit mx-auto max-w-[1088px] desktop:max-w-[1204px]"
      >
        <IconCard
          className=""
          title="Expertise"
          text="Professional custom framers know the best practices on how to build frames for optimal results."
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff64d"
            >
              <path d="M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h26q1.2 0 2.1.9.9.9.9 2.1v34q0 1.2-.9 2.1-.9.9-2.1.9Zm14.4-24.35 3.75-2.15 3.75 2.15q.35.25.725.025T34 19V7h-9.7v12q0 .45.375.675.375.225.725-.025Z" />
            </svg>
        </IconCard>
        <IconCard
          className=""
          title="Personalization"
          text="Custom framing is a way of expressing your taste and enhancing the visual aesthetic of your art."
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff64d"
            >
              <path d="M10.75 42.15q-1.7 0-3.35-.575Q5.75 41 4.5 39.7q1.75-.6 2.5-1.75t.75-3.1q0-2.2 1.525-3.725T13 29.6q2.2 0 3.725 1.525t1.525 3.725q0 3.2-2.175 5.25t-5.325 2.05Zm11.5-11.85-4.5-4.75 18.8-18.8q.7-.7 1.55-.725.85-.025 1.6.725l1.45 1.45q.75.75.725 1.625-.025.875-.725 1.575Z" />
            </svg>
        </IconCard>
        <IconCard
          className=""
          title="High-Quality"
          text="We use certain tools and techniques which results in higher quality frames that look better and last longer."
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff64d"
            >
              <path d="m21.8 30.65 11.4-11.4-2.1-2.05-9.15 9.15-5.05-5.05-2.2 2.2Zm2.2 13.3q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" />
            </svg>
        </IconCard>
        <IconCard
          className=""
          title="Protection"
          text="Custom framing helps prevent your pieces from fading, breaking down, and becoming damaged."
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff64d"
            >
              <path d="M24 43.8q-.3 0-.6-.025t-.55-.125q-6.55-2.15-10.7-8.3Q8 29.2 8 21.9v-9.8q0-.95.55-1.725.55-.775 1.4-1.125l13-4.85q.55-.2 1.05-.2t1.05.2l13 4.85q.85.35 1.4 1.125.55.775.55 1.725v9.8q0 7.3-4.15 13.45-4.15 6.15-10.7 8.3-.25.1-.55.125-.3.025-.6.025Zm0-2.9q5.3-1.75 8.775-6.425Q36.25 29.8 36.85 24H24V7.25L11 12.1v9.8q0 .6.025 1.025.025.425.125 1.075H24Z" />
            </svg>
        </IconCard>
      </div>
    </div>
  );
}
