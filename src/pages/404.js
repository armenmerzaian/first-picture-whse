import * as React from "react";
import Footer from '../layout/Footer';
import {Link} from "gatsby";


const NotFoundPage = () => {
  return (
    <>
      <div className="pt-[188px] bg-secondary-dark h-screen flex flex-col gap-4 justify-center items-center py-28">
        <Link to="/" className="shrink-0 h-fit my-auto">
          <img
            src="images/navbar-brand.svg"
            alt="logo"
            className="h-[110px]"
          />
        </Link>
        <span className="font-light text-[176px] text-primary-55">404</span>
        <span className="font-regular text-[23px] text-tertiary-light/38">
          This page is unavailable at the moment. Please try again later!
        </span>
      </div>
    </>
  );
}

export default NotFoundPage
