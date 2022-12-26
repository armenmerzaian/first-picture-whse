import React from "react";
import { Link } from "gatsby";

export default function ActionButton({
  type,
  label,
  fontSize = "text-lg",
  padding = "py-2 px-4",
  trailingIcon,
  to,
}) {
  return (
    <Link
      to={to}
      className={
        type === "secondary"
          ? `bg-secondary-dark hover:bg-neutral-20 active:bg-neutral-30 text-tertiary-light/87 border rounded-[100px] ${padding} flex gap-2 w-fit`
          : `bg-primary-55 hover:bg-primary-65 active:bg-primary-75 text-secondary-dark font-semibold rounded-[100px] ${padding} flex gap-2 w-fit`
      }
    >
      <>
        <div className={`flex items-center font-semibold ${fontSize}`}>
          {label}
        </div>
        {trailingIcon === true ? (
          <div className="self-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m14 18-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6Z" />
            </svg>
          </div>
        ) : (
          ""
        )}
      </>
    </Link>
  );
}