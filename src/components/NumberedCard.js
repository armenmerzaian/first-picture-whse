import React from 'react'

export default function NumberedCard({children, number, title, text}) {
  return (
    <div className="relative max-w-[343px] desktop:max-w-[379px] bg-surface-1 rounded-2xl shadow-sm pb-8">
      <div className="absolute text-center w-fit mx-auto inset-x-0 -top-5 py-1 px-[0.92rem] text-[23px] rounded-full bg-primary-65 text-secondary-dark">
        {number}
      </div>
      <div className="mt-[4.5rem]">
        <div className="text-center text-primary-65">{children}</div>
        <h1 className="text-center px-8 mt-4 text-xl font-regular text-primary-65">{title}</h1>
        <p className="text-center mt-1 px-4 text-sm font-light leading-6 text-tertiary-light/87">{text}</p>
      </div>
    </div>
  );
}
