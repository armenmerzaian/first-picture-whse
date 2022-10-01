import React from 'react'
import { Link } from 'gatsby';

export default function FooterItem({variant, link, label}) {
  return (
    <li className="py-2">
      <Link
        to={link}
        className={
          variant === "child"
            ? "text-base font-regular hover:text-neutral-60"
            : "text-lg font-semibold hover:text-primary-65"
        }
      >
        {label}
      </Link>
      <div
        className={
          variant === "child"
            ? "hidden"
            : "border-b-2 border-primary-55 rounded-full w-[26px] mt-2"
        }
      />
    </li>
  );
}
