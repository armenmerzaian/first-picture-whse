import React from 'react'

/* export default function StoreHours() {
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
} */

export default function StoreHours() {
  return (
    <div className="flex flex-col bg-surface-6 rounded-2xl p-4 laptop:p-6 gap-4 tablet:gap-6 flex-grow flex-1">
      <h5 className="text-primary-65 text-lg tablet:text-xl laptop:text-2xl font-bold">
        Store Hours
      </h5>
      <div className="flex flex-col gap-2">
        <Info
          label="Monday:"
          info="By Appointment Only"
          className="border-b-2 border-b-neutral-20"
        />
        <Info
          label="Tuesday-Thursday:"
          info="9:30am - 5:30pm"
          className="border-b-2 border-b-neutral-20"
        />
        <Info
          label="Friday:"
          info="9:30am - 4:00pm"
          className="border-b-2 border-b-neutral-20"
        />
        <Info label="Saturday:" info="10:00am - 4:00pm" />
      </div>
    </div>
  );
}

function Info({label, info, className}){
  return (
    <div className={` ${className} flex text-tertiary-light/87 pb-[8px] laptop:pb-[10px] self-stretch justify-between items-baseline text-sm font-light tablet:text-base laptop:text-lg laptop:font-regular`}>
      <label>
        {label}
      </label>
     <span>
      {info}
     </span>
    </div>
  );
}