import React from 'react'
import ActionButton from "../components/ActionButton";
import { Link } from "gatsby";
import HeroImage from "../components/HeroImage";

export default function Hero({subtitle, img, jumpLink, dblBtn, children, mobileSubtitle}) {
  return (
    <div className="max-w-[1204px] mt-10 mx-auto">
      <div className="laptop:flex flex-row-reverse laptop:justify-between gap-[127px] space-y-12 tablet:space-y-14">
        <HeroImage img={img} />
        <div className="laptop:self-center max-w-[705px] mx-auto">
          <div className="w-fit laptop:px-0 mx-auto">
            {children}
            <p
              className={
                subtitle && mobileSubtitle === false
                  ? "hidden text-tertiary-light/60 tablet:block laptop:inline-block mx-auto w-fit text-center laptop:text-left text-lg font-light laptop:text-xl mb-12 tablet:w-[545px] desktop:w-[673px]"
                  : "text-tertiary-light/60 tablet:block laptop:inline-block mx-auto w-fit text-center laptop:text-left text-lg font-light laptop:text-xl mb-12 tablet:w-[545px] desktop:w-[673px]"
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
      <div className="w-fit mx-auto mt-10 px-[6px] pt-[2px] !rounded-full laptop:border border-primary-55 animate-bounce">
        <Link to={jumpLink}>
          {/* <span className="material-icons text-5xl text-primary-55">
            expand_more
          </span> */}
          <svg className="border-primary-55" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
        </Link>
      </div>
    </div>
  );
}
