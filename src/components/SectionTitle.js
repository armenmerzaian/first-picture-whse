import React from 'react'

export default function SectionTitle({text}) {
  return (
    <h1 className="text-4xl laptop:text-6xl font-semibold text-primary-55 text-center pt-4">
      {text}
    </h1>
  );
}
