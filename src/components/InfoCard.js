import React from "react";

export default function InfoCard() {
  return (
    <div className="flex flex-col bg-surface-6 rounded-2xl p-2 tablet:p-4 laptop:p-5 gap-1 laptop:gap-2 flex-grow flex-1">
      <Info
        label="Phone"
        info="416-781-9141"
        className="gap-[25px] laptop:gap-[38px] pl-[5px] laptop:pl-[6px]"
        link="tel:416-781-9141"
      >
        <span className="material-icons laptop:text-2xl">call</span>
      </Info>

      <Info
        label="Email"
        info="firstpictureframewhse@gmail.com"
        className="border-y-2 border-neutral-20 py-1 laptop:py-2 gap-[27px] laptop:gap-[40px] pl-[7px] laptop:pl-[9px]"
        link="mailto:firstpictureframewhse@gmail.com?subject=I'm looking for a high quality framing job."
      >
        <span className="material-icons laptop:text-2xl">email</span>
      </Info>

      <Info
        label="Location"
        info="3087 Bathurst St, North York, ON M6A 2A3"
        className="gap-[20px] laptop:gap-[32px]"
        link="https://goo.gl/maps/W9FHfuPNrmRY4Leh6"
      >
        <span className="material-icons laptop:text-2xl">place</span>
      </Info>
    </div>
  );
}

function Info({ className, children, label, info, link }) {
  return (
    <div className={`${className} flex flex-grow items-center`}>
      <div className="flex flex-col justify-center p-2 laptop:p-1 items-center text-primary-65 gap-1">
        {children}
        <label className="text-[11px] leading-4 laptop:text-sm font-light text-primary-85">
          {label}
        </label>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-sm tablet:text-base laptop:text-lg font-light laptop:font-regular text-tertiary-light/87 hover:underline"
      >
        {info}
      </a>
    </div>
  );
}
