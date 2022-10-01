import React from 'react'

export default function OurPurpose() {
  return (
      <div className="laptop:px-[72px] py-14 tablet:py-28 laptop:py-32 px-4 space-y-6">
        <div className="max-w-[1200px] desktop:mx-auto space-y-6 laptop:space-y-4">
          <h2 className="text-4xl tablet:text-5xl laptop:text-6xl text-primary-55 font-semibold text-center laptop:text-left">
            Our Purpose
          </h2>
          <p className="text-base tablet:text-lg laptop:text-xl text-center font-light text-tertiary-light/87 laptop:text-left max-w-[689px] mx-auto laptop:mx-0">
            Custom framing is a part of who we are. We've dedicated a lifetime
            trying to understand the degree of expertise that is required in order
            to build <span className='text-primary-55'>high-quality</span> picture frames which not only meet, but exceed our
            customers' expectations and our own.
          </p>
        </div>
      </div>
  );
}
