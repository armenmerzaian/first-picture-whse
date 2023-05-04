import React from 'react'
import { Link } from "gatsby";

export default function BreadCrumb({crumbs}) {

  return (
    <div className="hidden laptop:block fixed z-10 top-[98px] left-0 right-0 h-12 py-3 border-b-2 border-neutral-20 bg-secondary-dark">
      <div className="text-tertiary-light/87 font-light text-base leading-6 space-x-2 max-w-[1088px] desktop:max-w-[1204px] mx-auto">
        {crumbs.map((crumb, key) => {
          return (
            <>
              <Link
                className="py-2 px-4 hover:text-primary-85 hover:bg-neutral-20 rounded-[100px]"
                to={crumb.link}
                key={key}
              >
                {crumb.title}
              </Link>
              <span className="text-neutral-20 last-of-type:hidden">|</span>
            </>
          );
        })}
      </div>
    </div>
  );
}
