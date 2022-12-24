import * as React from "react";
import Footer from '../layout/Footer';
import Navigation from '../components/Navigation'

const NotFoundPage = () => {
  return (
    <>
      <Navigation />
      <div className="pt-[188px] bg-secondary-dark h-full flex flex-col gap-4 justify-center items-center py-28">
        <span className="font-light text-[176px] text-primary-55">404</span>
        <span className="font-regular text-[23px] text-tertiary-light/38">
          Dericks a Bitch
        </span>
        <span className="font-regular text-[16px] text-tertiary-light/38">
          Love, 
          <br/>
          Araz
        </span>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage
