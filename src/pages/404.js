import * as React from "react";
import Footer from '../layout/Footer';
import Navigation from '../components/Navigation'

const NotFoundPage = () => {
  return (
    <>
      <Navigation />
      <div className="pt-[188px] bg-secondary-dark h-full flex flex-col gap-4 justify-center items-center py-28">
        <span className="font-bold text-7xl text-primary-55">404</span>
        <span className="font-regular text-4xl text-tertiary-light/38">Page Not Found</span>
      </div>
      <Footer /> 
    </>
  )
}

export default NotFoundPage
