import React from 'react'

export default function ValuesIconCard({icon, value, text, font, children}) {
  return (
    <div className="flex flex-col items-center tablet:items-start laptop:items-start bg-surface-1 w-full rounded-2xl gap-6 p-4 pt-8 tablet:p-6 tablet:pt-10 laptop:p-8 laptop:pt-12 tablet:min-w-[556px] tablet:max-w-[981px] tablet:mx-auto">
      <span
        class="text-primary-65 text-5xl laptop:text-6xl"
      >
        {children}
      </span>
      <div className="text-center tablet:text-left space-y-1">
        <h2 className="text-lg font-regular tablet:text-xl laptop:text-2xl text-primary-65">
          {value}
        </h2>
        <p className="text-sm font-light tablet:text-base laptop:text-lg text-tertiary-light/87">
          {text}
        </p>
      </div>
    </div>
  );
}
