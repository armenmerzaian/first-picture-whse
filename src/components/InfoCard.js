import React from 'react'

export default function InfoCard({size, footer}) {
  return (
    <>
      <div
        className={
          footer === true
            ? "p-4 rounded-2xl bg-surface-6 shadow-sm w-full h-fit"
            : "p-4 rounded-2xl bg-surface-6 shadow-sm max-w-[343px] laptop:max-w-[483px] h-fit"
        }
      >
        <div className="text-lg font-semibold min-w-fit">
          <ul>
            <li className="flex gap-8 pb-4 ml-[5px]">
              <div className="flex flex-col px-2 justify-center items-center text-primary-55 max-w-fit">
                <span className="material-icons laptop:text-2xl">call</span>
                <span className="text-[11px] laptop:text-sm text-primary-85 font-light">
                  Phone
                </span>
              </div>
              <div
                className={
                  footer === true
                    ? "text-base laptop:text-sm text-tertiary-light/87 font-light max-w-fit py-3.5 ml-[-4px]"
                    : "text-sm laptop:text-lg text-tertiary-light/87 font-light max-w-fit py-3.5 ml-[-4px]"
                }
              >
                <a href="tel:416-781-9141" className="hover:underline">416-781-9141</a>
              </div>
            </li>
            <li className="flex gap-8 pb-4 ml-[7px]">
              <div className="flex flex-col px-2 justify-center items-center text-primary-55 max-w-fit">
                <span className="material-icons laptop:text-2xl">email</span>
                <span className="text-[11px] laptop:text-sm text-primary-85 font-light">
                  Email
                </span>
              </div>
              <div
                className={
                  footer === true
                    ? "text-base laptop:text-sm text-tertiary-light/87 font-light max-w-fit mr-4 py-3.5 tracking-wider"
                    : "text-sm laptop:text-lg text-tertiary-light/87 font-light max-w-fit mr-4 py-3.5 tracking-wider"
                }
              >
                <a href="mailto:info@firstpictureframewhse.com?subject=I'm looking for a high quality framing job." className="hover:underline">
                  info@firstpictureframewhse.com
                </a>
              </div>
            </li>
            <li className="flex gap-8">
              <div className="flex flex-col px-2 justify-center items-center text-primary-55 max-w-fit">
                <span className="material-icons laptop:text-2xl">place</span>
                <span className="text-[11px] laptop:text-sm text-primary-85 font-light">
                  Location
                </span>
              </div>
              <div
                className={
                  footer === true
                    ? "text-base laptop:text-sm text-tertiary-light/87 font-light max-w-fit ml-[-8px]"
                    : "text-sm laptop:text-lg text-tertiary-light/87 font-light max-w-fit ml-[-8px]"
                }
              >
                <a
                  href="https://goo.gl/maps/W9FHfuPNrmRY4Leh6"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  3087 Bathurst St, North York, <br /> ON M6A 2A3
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
