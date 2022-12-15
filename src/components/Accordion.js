import React from "react";
import '../styles/webkit-styles.css';


export default function Accordion({ question, answer }) {
  return (
    <details className="group">
      <summary className="flex items-center justify-between px-4 tablet:px-6 laptop:px-8 rounded-2xl group-open:rounded-b-none cursor-pointer bg-surface-1 min-h-[96px] desktop:h-32 change-webkit">
        <h5 className="font-semibold text-tertiary-light text-base tablet:text-xl desktop:text-2xl">
          {question}
        </h5>

        <svg
          className="flex-shrink-0 ml-1.5 w-5 h-5 desktop:scale-150 transition duration-400 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFF41A"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <div className="px-4 tablet:px-6 laptop:px-8 pb-5 desktop:pb-[48px] rounded-b-2xl bg-surface-1">
        <p className="text-tertiary-light/87 text-sm leading-7 tablet:text-lg max-w-[696px] font-light">
          {answer}
        </p>
      </div>
    </details>
  );
}
