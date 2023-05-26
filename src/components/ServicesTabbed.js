import React, {useState} from 'react';
import ActionButton from './ActionButton';

export default function ServicesTabbed() {
    const [toggleState, setToggleState] = useState(1);

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
              text="Customers who are looking to custom frame any number of their personal momentos, family photos, collages, documents, certificates, degrees, home decor and artworks."
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
              text="Customers who are retail business's, designers or large institutions looking for custom or large scale custom or bulk framing "
            />
            <TabbedCard
              title="What We Do"
              text="We provide clients with high quality custom framing at wholesale prices* as well as regularly scheduled pickup and delivery*.  We also provide framing supplies*"
            />
          </div>
          <div
            className={
              toggleState === 3 ? "flex gap-8 justify-center" : "hidden"
            }
          >
            <TabbedCard
              title="Who This Service is For"
              text="Institutions, banks, schools, hotels, etc. who are in need of large quantities of custom framing."
            />
            <TabbedCard
              title="What We Do"
              text="We will assist the client in designing the best kind of framing for their needs and budget.  Provide excellent quality framing, packaging* and delivery* in a timely and efficient manner."
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
