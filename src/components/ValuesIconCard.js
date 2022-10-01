import React from 'react'

export default function ValuesIconCard({icon, value, text, font}) {
  return (
    <div className="flex flex-col items-center tablet:items-start laptop:items-start bg-surface-1 w-full rounded-2xl gap-6 p-4 pt-8 !tablet:p-6 laptop:p-8">
      <span
        class={
          font === "outlined"
            ? "material-icons-outlined text-primary-65 text-5xl laptop:text-6xl"
            : "material-icons text-primary-65 text-5xl laptop:text-6xl"
        }
      >
        {icon}
      </span>
      <div className="text-center tablet:text-left space-y-1">
        <h2 className="text-lg font-regular tablet:text-xl laptop:text-2xl text-primary-65">
          {value}
        </h2>
        <p className="text-sm font-light tablet:text-base text-tertiary-light/87">
          {text}
        </p>
      </div>
    </div>
  );
}
