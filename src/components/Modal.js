import React from 'react'

export default function Modal({modalShow, setModalShow, title, text}) {

function toggleModal(){
    setModalShow(!modalShow)
}
  return (
    <div className="fixed z-40 inset-0 bg-black/60 backdrop-blur-2xl flex justify-center items-center">
      <div className="bg-surface-1 rounded-2xl w-[343px] h-[332px] grow-0 shrink-0 flex flex-col justify-start items-center">
        <button onClick={toggleModal} className="self-end pt-[20px] pr-[20px]">
          <span className="material-icons-outlined text-tertiary-light/87">
            close
          </span>
        </button>
        <span className="mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            fill="rgb(255 244 26)"
          >
            <path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Zm0-4.7q6.9 0 11.725-4.825Q40.55 30.9 40.55 24q0-6.9-4.825-11.725Q30.9 7.45 24 7.45q-6.9 0-11.725 4.825Q7.45 17.1 7.45 24q0 6.9 4.825 11.725Q17.1 40.55 24 40.55ZM24 24Z" />
          </svg>
        </span>
        <h3 className="text-primary-55 text-xl leading-8 font-bold text-center mb-2">
          {title}
        </h3>
        <p className="text-center text-tertiary-light/87 text-sm px-[12px] leading-loose mb-5">
          {text}
        </p>
        <button
          onClick={toggleModal}
          className="rounded-[100px] px-4 py-2 bg-primary-55"
        >
          Done
        </button>
      </div>
    </div>
  );
}
