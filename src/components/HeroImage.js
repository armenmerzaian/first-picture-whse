import React from 'react'

export default function HeroImage({img}) {
  return (
    <div className="max-h-[585px] laptop:w-[330px] laptop:max-w-[330px]">
      <img
        src={img}
        alt="hero"
        className="object-cover w-full !laptop:w-[330px] !laptop:max-w[330px] max-h-[528px] tablet:max-h-[585px] tablet:h-[528px] laptop:h-[585px] rounded-[16px] tablet:rounded-[24px] laptop:rounded-[40px]"
      />
    </div>
  );
}
