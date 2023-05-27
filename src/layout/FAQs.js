import React from 'react'
import Accordion from '../components/Accordion';
import SectionTitle from '../components/SectionTitle';

export default function FAQs() {
  return (
    <div id="faqs" className="pt-[9rem]">
      <SectionTitle text="FAQs" />
      <div
        id="according-stack"
        className="mt-12 space-y-4 max-w-[902px] desktop:max-w-[996px] mx-auto"
      >
        <Accordion
          question="What are the benefits of custom framing?"
          answer="There is an old adage that says 'It's better to do something right the first time'.   This is very true for custom framing as well.   To have your artwork, heirloom, collectible framed the right way will not only enhance the look of your item, but with the proper custom framing materials and techniques, your item will last the test of time and be properly preserved."
        />
        <Accordion
          question="Can you frame anything?"
          answer="Our over 38 years of experience have shown us that the answer is  YES.   We have frame hand held Olympic torches, Christening dresses, collector/antique purses, bayonets, over 100 year old paper currencies, original famous artworks, sports jersies, sports equipment, 3D postal stamps.   We've seen it all."
        />
        <Accordion
          question="How expensive is custom framing?"
          answer="This is obviously a loaded question.  However a quality custom frame is much less expensive in the long run than to purchase an inexpensive ready made frame and then have to modify it to fit your artwork or, as is usually the case, end up discarding the 'cheap' frame and then buying a proper custom frame.  Far better to do it right the first time."
        />
        <Accordion
          question="How should I choose a frame?"
          answer="It has always been our approach to help a client design their framing to first and foremost enhance the look of the 'artwork'.  Our knowledgeable staff will help guide you through the process of choosing the right frame, matting, glazing and other options that will make your framed piece a centre piece of your home or office.  Of course the client has the last word in the design process."
        />
        <Accordion
          question="How long does it take to custom frame something?"
          answer="Generally our turn-around time is 2 weeks.   However, depending on the complexity or ease of your project, it could take longer or shorter."
        />
      </div>
    </div>
  );
}
