import React from 'react'

export default function ReviewCard({img, msg, name}) {
  return (
   <div className="relative bg-surface-1 rounded-xl tablet:rounded-2xl w-[327px] max-w-[504px] h-[248px] px-4 py-7 tablet:p-8 tablet:w-[586px] tablet:max-w-[586px] tablet:h-[288px]">
      <p className="text-tertiary-light text-center font-light tablet:text-lg tablet:font-regular">
        {msg}
      </p>
      <div className="absolute bottom-2 tablet:bottom-8 inset-x-0 p-2 flex justify-center items-center gap-4 tablet:gap-8">
        {img}
        <h1 className="text-tertiary-light text-xl font-bold tablet:text-2xl">{name}</h1>
      </div>
   </div>
  );
}

