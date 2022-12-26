import React from 'react'

export default function IconCard({ children, title, text }) {
  return (
    <div className="tablet:max-w-[400px] laptop:max-w-[273px]">
      <div className="text-primary-65 mb-[20px]">{children}</div>
      <div className="text-primary-65 text-lg font-regular">{title}</div>
      <div className="text-sm font-light leading-6 text-tertiary-light/87">{text}</div>
    </div>
  );
}
