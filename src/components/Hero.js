import React from 'react'
import ActionButton from "../components/ActionButton";
import { Link } from "gatsby";
import HeroImage from "../components/HeroImage";

export default function Hero({subtitle, img, jumpLink, dblBtn, children, mobileSubtitle}) {
  return (
    <div className="max-w-[1088px] desktop:max-w-[1204px] mt-10 mx-auto">
      <div className="laptop:flex flex-row-reverse laptop:justify-between gap-[70px] space-y-12 tablet:space-y-14">
        <HeroImage img={img} />
        <div className="laptop:self-center mx-auto laptop:mx-0 max-w-[705px]">
          <div className="w-fit mx-auto laptop:px-0">
            {children}
            <p
              className={
                subtitle && mobileSubtitle === false
                  ? "hidden text-tertiary-light/60 tablet:block laptop:inline-block mx-auto w-fit text-center laptop:text-left text-lg font-light laptop:text-xl mb-12 tablet:w-[545px] laptop:w-[673px]"
                  : "text-tertiary-light/60 tablet:block laptop:inline-block mx-auto w-fit text-center laptop:text-left text-lg font-light laptop:text-xl mb-12 tablet:w-[545px] laptop:w-[673px]"
              }
            >
              {subtitle}
            </p>
          </div>
          <div className="mx-auto laptop:mx-0 space-x-8 flex justify-center laptop:justify-start">
            <ActionButton to="/contactUs" label={"Contact Us"} />
            <span
              className={
                dblBtn === false ? "hidden" : "hidden laptop:inline-block"
              }
            >
              <ActionButton to="/#faqs" label={"FAQs"} type="secondary" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto mt-10 p-2 desktop:p-4 !rounded-full laptop:border-2 border-primary-55 animate-bounce">
        <Link to={jumpLink}>
          <svg
            className="flex-shrink-0 m-1 w-5 h-5 desktop:scale-150 transition duration-400 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFF41A"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
