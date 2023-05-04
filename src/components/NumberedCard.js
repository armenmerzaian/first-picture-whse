import React from 'react'

export default function NumberedCard({children, number, title, text}) {
  return (
    <div className="relative tablet:w-[230px] max-w-[343px] laptop:max-w-[379px] bg-surface-1 rounded-2xl shadow-sm pb-8 flex-grow tablet:self-stretch">
      <div className="absolute text-center w-fit mx-auto inset-x-0 -top-5 py-1 px-[0.92rem] text-[23px] rounded-full bg-primary-65 text-secondary-dark">
        {number}
      </div>
      <div className="mt-[4.5rem] text-center  px-6">
        <div className="text-primary-65">{children}</div>
        <h1 className="px-8 mt-4 tablet:px-0 text-xl font-semibold text-primary-65">{title}</h1>
        <p className="mt-1 px-4 tablet:px-0 text-lg font-light leading-8 text-tertiary-light/87">{text}</p>
      </div>
    </div>
  );
}
