import React from "react";
import ActionButton from "../components/ActionButton";
import {Link} from "gatsby"
import HeroImage from "../components/HeroImage";

export default function AboutUsHero() {
  return (
    <div className="max-w-[1204px] mt-10 mx-auto">
      <div className="laptop:flex flex-row-reverse laptop:justify-between">
        <HeroImage img="../images/hero-image.png" />
        <div className="laptop:self-center">
          <p className="text-tertiary-light text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl leading-[48px] font-bold text-center laptop:text-left px-6 laptop:pl-0 mb-6">
            About Us
          </p>

          <p className="text-tertiary-light/60 mx-auto w-fit text-center laptop:text-left text-lg laptop:text-xl mb-8 tablet:w-[545px] desktop:w-[673px]">
            Custom framing is a part of who we are. We've dedicated a lifetime
            to understanding the degree of workmanship that is required for
            building high-quality picture frames.
          </p>

          <div className="w-fit mx-auto laptop:mx-0 space-x-8">
            <ActionButton to="/contactUs" label={"Contact Us"} />
            <span className="hidden laptop:inline-block">
              <ActionButton to="/aboutUs" label={"About Us"} />
            </span>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto mt-10 px-[6px] pt-[2px] rounded-full laptop:outline outline-primary-55">
        <Link to="/#our-services">
          <span className="material-icons text-5xl text-primary-55">
            expand_more
          </span>
        </Link>
      </div>
    </div>
  );
}
