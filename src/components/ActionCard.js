import React from 'react'
import ActionButton from './ActionButton';


export default function ActionCard({image, title, text}) {
  return (
    <div className="bg-surface-1 w-[272px] tablet:w-[380px] rounded-2xl p-8 min-h-[256px] tablet:h-[352px]">
      <div id="action-card-header" className="flex justify-center tablet:justify-start">
        <img
          src="images/action-card-image.png"
          alt="action card"
          width="88"
          className="rounded-full"
        />
      </div>
      <div id="action-card-text" className="mt-3">
        <h3 className="text-primary-55 text-lg tablet:text-xl !font-light text-center tablet:text-left">
          {title}
        </h3>
        <p className="text-tertiary-light/87 font-light !text-sm tablet:!text-base text-center tablet:text-left mt-2">
          {text}
        </p>
      </div>
      <div className="mt-6 hidden tablet:block">
        <ActionButton label="Learn more" trailingIcon={true} to="/services"/>
      </div>
    </div>
  );
}
