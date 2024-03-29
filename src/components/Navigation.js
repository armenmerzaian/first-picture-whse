import React, { useState } from "react";
import { Link } from 'gatsby';

export default function Navigation() {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="text-tertiary-light/87 py-4 desktop:px-[120px] items-center fixed z-10 top-0 left-0 right-0 bg-secondary-dark border-b-2 border-neutral-20">
      <div className="flex justify-between w-full mx-auto max-w-[1088px] desktop:max-w-[1204px] px-4 laptop:px-0">
        <Link to="/" className="shrink-0 h-fit my-auto">
          <img
            src="images/navbar-brand.svg"
            alt="logo"
            className="h-[48px] laptop:h-[64px]"
          />
        </Link>
        <ul className="laptop:flex laptop:gap-14 text-lg font-semibold hidden items-center ">
          <li className="p-2">
            <Link
              to="/"
              className="pb-1"
              activeClassName="text-primary-55 before:block before:absolute before:bottom-7 before:border-b-2 before:w-[35px] before:ml-2 before:border-primary-55"
            >
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/gallery"
              className="pb-1"
              activeClassName="text-primary-55 before:block before:absolute before:bottom-7 before:border-b-2 before:w-[35px] before:ml-3.5 before:border-primary-55"
            >
              Gallery
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/services"
              className="pb-1"
              activeClassName="text-primary-55 before:block before:absolute before:bottom-7 before:border-b-2 before:w-[35px] before:ml-5 before:border-primary-55"
            >
              Services
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/aboutUs"
              className="pb-1"
              activeClassName="text-primary-55 before:block before:absolute before:bottom-7 before:border-b-2 before:w-[35px] before:ml-6 before:border-primary-55"
            >
              About Us
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/contactUs"
              className="px-4 py-2 text-secondary-dark font-semibold text-lg leading-8 bg-primary-55 hover:bg-primary-65 active:bg-primary-75 rounded-[100px]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="cursor-pointer laptop:hidden" onClick={handleNav}>
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff41a"
            >
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff41a"
            >
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed z-10 left-0 top-20 w-full h-screen pt-[52px] bg-secondary-dark ease-in-out duration-300 laptop:hidden"
              : "fixed left-[-100%]"
          }
        >
          <ul className="text-xl leading-8 font-light text-tertiary-light/60 px-8 space-y-8">
            <li className="">
              <Link to="/" className="pb-1" activeClassName="text-primary-55">
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/gallery"
                className="pb-1"
                activeClassName="text-primary-55"
              >
                Gallery
              </Link>
            </li>
            <li className="">
              <Link
                to="/services"
                className="pb-1"
                activeClassName="text-primary-55"
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                to="/aboutUs"
                className="pb-1"
                activeClassName="text-primary-55"
              >
                About Us
              </Link>
            </li>
            <li className="">
              <Link
                to="/contactUs"
                className="pb-1"
                activeClassName="text-primary-55"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
