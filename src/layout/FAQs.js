import React from 'react'
import Accordion from '../components/Accordion';
import SectionTitle from '../components/SectionTitle';

export default function FAQs() {
  return (
    <div id="faqs" className="pt-[9rem]">
      <SectionTitle text="FAQs" />
      <div
        id="according-stack"
        className="mt-12 space-y-4 max-w-[996px] mx-auto"
      >
        <Accordion
          question="What are the benefits of custom framing?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis integer blandit consectetur sed aliquam tristique varius tristique viverra. Sed tincidunt tempus sed potenti. Et metus, semper arcu, nullam aliquam mollis. Ultricies vel adipiscing etiam risus. Vestibulum eget hendrerit nunc facilisis habitant eu porttitor non iaculis. In aliquam vivamus amet tristique nullam vel vulputate pharetra."
        />
        <Accordion
          question="Can you frame anything?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis integer blandit consectetur sed aliquam tristique varius tristique viverra. Sed tincidunt tempus sed potenti. Et metus, semper arcu, nullam aliquam mollis. Ultricies vel adipiscing etiam risus. Vestibulum eget hendrerit nunc facilisis habitant eu porttitor non iaculis. In aliquam vivamus amet tristique nullam vel vulputate pharetra."
        />
        <Accordion
          question="How expensive is custom framing?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis integer blandit consectetur sed aliquam tristique varius tristique viverra. Sed tincidunt tempus sed potenti. Et metus, semper arcu, nullam aliquam mollis. Ultricies vel adipiscing etiam risus. Vestibulum eget hendrerit nunc facilisis habitant eu porttitor non iaculis. In aliquam vivamus amet tristique nullam vel vulputate pharetra."
        />
        <Accordion
          question="How should I choose a frame?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis integer blandit consectetur sed aliquam tristique varius tristique viverra. Sed tincidunt tempus sed potenti. Et metus, semper arcu, nullam aliquam mollis. Ultricies vel adipiscing etiam risus. Vestibulum eget hendrerit nunc facilisis habitant eu porttitor non iaculis. In aliquam vivamus amet tristique nullam vel vulputate pharetra."
        />
        <Accordion
          question="How long does it take to custom frame something?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis integer blandit consectetur sed aliquam tristique varius tristique viverra. Sed tincidunt tempus sed potenti. Et metus, semper arcu, nullam aliquam mollis. Ultricies vel adipiscing etiam risus. Vestibulum eget hendrerit nunc facilisis habitant eu porttitor non iaculis. In aliquam vivamus amet tristique nullam vel vulputate pharetra."
        />
      </div>
    </div>
  );
}
