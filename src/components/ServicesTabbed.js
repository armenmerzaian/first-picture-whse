import React, {useState} from 'react';
import ActionButton from './ActionButton';

export default function ServicesTabbed() {
    const [toggleState, setToggleState] = useState(3);

    function toggleTab(index) {
      setToggleState(index);
    }

  return (
    <div
      id="services-offered"
      className="laptop:w-[902px] desktop:w-[998px] mx-auto px-[49px] py-6 bg-surface-1 rounded-2xl"
    >
      <div className="">
        <div id="tab-buttons" className="border-b border-neutral-20">
          <button
            className={
              toggleState === 1
                ? "px-8 py-3 text-xl text-primary-55 text-center border-b-2 border-primary-55 bg-surface-3 rounded-t-xl font-light"
                : "px-8 py-3 text-xl text-tertiary-light/38 text-center font-light"
            }
            onClick={() => toggleTab(1)}
          >
            Retail
          </button>
          <button
            className={
              toggleState === 2
                ? "px-8 py-3 text-xl text-primary-55 text-center border-b-2 border-primary-55 bg-surface-3 rounded-t-xl font-light"
                : "px-8 py-3 text-xl text-tertiary-light/38 text-center font-light"
            }
            onClick={() => toggleTab(2)}
          >
            Wholesale
          </button>
          <button
            className={
              toggleState === 3
                ? "px-8 py-3 text-xl text-primary-55 text-center border-b-2 border-primary-55 bg-surface-3 rounded-t-xl font-light"
                : "px-8 py-3 text-xl text-tertiary-light/38 text-center font-light"
            }
            onClick={() => toggleTab(3)}
          >
            Production
          </button>
        </div>
        <div id="tab-content" className="mt-12">
          <div
            className={
              toggleState === 1 ? "flex gap-8 justify-center" : "hidden"
            }
          >
            <TabbedCard
              title="Who This Service is For"
              text="Customers looking to custom frame up to half a dozen items"
            />
            <TabbedCard
              title="What We Do"
              text="Our staff will assist you in choosing the right frame, matting, and glazing for you and your artwork"
            />
          </div>
          <div
            className={
              toggleState === 2 ? "flex gap-8 justify-center" : "hidden"
            }
          >
            <TabbedCard
              title="Who This Service is For"
              text="Customers or businesses looking for custom framing services in bulk up to 100 items."
            />
            <TabbedCard
              title="What We Do"
              text="We sell large quantities of custom picture frames and framing supplies to retail stores at a discounted rate"
            />
          </div>
          <div
            className={
              toggleState === 3 ? "flex gap-8 justify-center" : "hidden"
            }
          >
            <TabbedCard
              title="Who This Service is For"
              text="Art galleries, banks, schools, businesses"
            />
            <TabbedCard
              title="What We Do"
              text="Our staff will custom frame the same item in bulk for businesses, art galleries, banks, school graduations and more"
            />
          </div>
        </div>
        <div className="mt-8 mb-1">
          <ActionButton to="/contactUs" label={"Contact Us"} />
        </div>
      </div>
    </div>
  );
}

function TabbedCard({title, text}) {
    return (
        <div className="p-6 bg-surface-3 rounded-xl w-full min-h-fit space-y-2">
            <h1 className="text-xl leading-8 font-regular text-primary-55">{title}</h1>
            <p className="text-lg leading-8 font-light text-tertiary-light/87">{text}</p>
        </div>
    )
}
