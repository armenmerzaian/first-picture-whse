import React from 'react'
import ActionButton from './ActionButton';


export default function ActionCard({image, title, text}) {
  return (
    <div className="!bg-surface-1 min-w-[272px] mx-2 tablet:w-[611px] rounded-xl min-h-[256px] tablet:min-h-fit tablet:max-h-[240px] laptop:max-h-min flex flex-col tablet:flex-row laptop:flex-col laptop:self-stretch">
      <div id="action-card-header" className="flex-grow tablet:flex-grow-0">
        <img
          src="images/action-card-image.png"
          alt="action card"
          className="object-cover w-full rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-tr-xl laptop:rounded-b-none h-[240px] tablet:min-w-[204px]"
        />
      </div>
      <div
        id="action-card-text"
        className="p-6 flex flex-col justify-between laptop:self-stretch laptop:h-full"
      >
        <h3 className="text-primary-55 text-lg laptop:text-xl !font-semibold text-left tablet:text-left">
          {title}
        </h3>
        <p className="text-tertiary-light/87 font-light !text-sm laptop:!text-lg text-left mt-1 mb-4">
          {text}
        </p>
        <div className="hidden tablet:block !text-sm">
          <ActionButton
            label="Learn more"
            trailingIcon={true}
            to="/services"
            fontSize="text-lg"
            padding="py-[6px] px-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
