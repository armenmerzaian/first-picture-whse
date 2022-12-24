import React from "react";
import { Link } from "gatsby";

export default function ActionButton({
  type,
  label,
  trailingIcon,
  to,
}) {
  return (
    <Link
      to={to}
      className={
        type === "secondary"
          ? "bg-secondary-dark hover:bg-neutral-20 active:bg-neutral-30 text-tertiary-light/87 border rounded-[100px] py-2 px-4 flex gap-2 w-fit"
          : "bg-primary-55 hover:bg-primary-65 active:bg-primary-75 text-secondary-dark font-semibold rounded-[100px] py-2 px-4 flex gap-2 w-fit"
      }
    >
      <>
        <div className="text-lg flex items-center font-semibold">{label}</div>
        {trailingIcon === true ? (
          <span className="material-icons flex items-center">arrow_right_alt</span>
        ) : (
          ""
        )}
      </>
    </Link>
  );
}
