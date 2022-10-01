import React from 'react'

export default function AboutSectionTitle({title}) {
  return (
    <h2 className="text-4xl tablet:text-5xl laptop:text-6xl text-primary-55 font-semibold text-center">
      {title}
    </h2>
  );
}
