import React from 'react'
import NumberedCard from '../components/NumberedCard'
import SectionTitle from '../components/SectionTitle';

export default function HowWeDo() {
  return (
    <div id="how-we-do" className="pt-36">
      <SectionTitle text="How We Do Things" />
      <div
        id="numbered-card-stack"
        className="mt-16 flex flex-col tablet:flex-row gap-10 items-center tablet:justify-center tablet:mx-8 tablet:gap-6 laptop:gap-8 laptop:max-w-[1088px] desktop:max-w-[1204px] laptop:mx-auto"
      >
        <NumberedCard
          number="1"
          title="Choose Your Frame"
          text="Pick out your frame with the assistance of our expert staff. This includes the material, color, style, size, texture and thickness of the frame."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            className="mx-auto"
            fill="#fff64d"
          >
            <path d="M7 43.95q-1.2 0-2.1-.875Q4 42.2 4 40.95V11q0-1.2.9-2.1Q5.8 8 7 8h9l6.95-7q.4-.4 1.05-.4t1.05.4L32 8h9q1.2 0 2.1.9.9.9.9 2.1v29.95q0 1.25-.9 2.125t-2.1.875Zm0-3h34V11H7v29.95Zm6.5-5q-.65 0-1.075-.425Q12 35.1 12 34.45V17.5q0-.65.425-1.075Q12.85 16 13.5 16h21q.65 0 1.075.425Q36 16.85 36 17.5v16.95q0 .65-.425 1.075-.425.425-1.075.425Z" />
          </svg>
        </NumberedCard>
        <NumberedCard
          number="2"
          title="Pick Matting & Glazing"
          text="We carry regular glass up to and including museum glass. We also offer custom designs with our automated mat cutting machine."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="48"
            height="48"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            className="mx-auto"
          >
            <path
              fill="#fff64d"
              d="m8.29 10.28l3.24-3.25l1.06 1.06l-3.24 3.25l-1.06-1.06m.41 4.33l5.66-5.66L15.42 10l-5.66 5.67l-1.06-1.06M18 3v18H6V3h12m2-2H4v22h16V1Z"
            />
          </svg>
        </NumberedCard>
        <NumberedCard
          number="3"
          title="Let Us Handle the Rest"
          text="Once you feel comfortable with all your decisions, we will give you an estimate on how long it will take to complete the framing job."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="48"
            height="48"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            className="mx-auto"
          >
            <path
              fill="#fff64d"
              d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25m19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4l1.77 1.76m-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1l-2.85 2.78M20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75L20.71 7Z"
            />
          </svg>
        </NumberedCard>
      </div>
    </div>
  );
}
