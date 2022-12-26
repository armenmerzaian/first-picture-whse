import React from 'react'

export default function StoreHours() {
  return (
    <>
      <div className="px-4 pt-4 laptop:p-6 rounded-2xl bg-surface-6 shadow-sm laptop:w-[486px] laptop:h-[292px] flex-grow min-w-fit">
        <h1 className="text-lg laptop:text-2xl font-semibold text-primary-55 pb-4 laptop:pb-6">
          Store Hours
        </h1>
        <div className="">
          <div className="flex justify-between text-base tablet:text-base laptop:text-lg text-tertiary-light/87 border-b-[1px] border-neutral-20 pb-2 mb-2">
            <span className="sketch:hidden">Monday: </span>
            <span className="hidden sketch:block">Mon: </span>
            <span className="font-light">By appointment only</span>
          </div>
          <div className="flex justify-between text-base tablet:text-base laptop:text-lg text-tertiary-light/87 border-b-[1px] border-neutral-20 pb-2 mb-2">
            <span className="sketch:hidden">Tuesday-Thursday: </span>
            <span className="hidden sketch:block">Tue-Thu: </span>
            <span className="font-light">9:30am - 5:30pm</span>
          </div>
          <div className="flex justify-between text-base tablet:text-base laptop:text-lg text-tertiary-light/87 border-b-[1px] border-neutral-20 pb-2 mb-2">
            <span className="sketch:hidden">Friday: </span>
            <span className="hidden sketch:block">Fri: </span>
            <span className="font-light">9:30am - 4:00pm</span>
          </div>
          <div className="flex justify-between text-base tablet:text-base laptop:text-lg text-tertiary-light/87  pb-2 mb-2">
            <span className="sketch:hidden">Saturday: </span>
            <span className="hidden sketch:block">Sat: </span>
            <span className="font-light">10:00am - 4:00pm</span>
          </div>
        </div>
      </div>
    </>
  );
}
