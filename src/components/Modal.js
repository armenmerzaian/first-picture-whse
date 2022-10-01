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
        <span className="material-icons-outlined text-primary-55 text-7xl mx-auto mb-6">
          check_circle
        </span>
        <h3 className="text-primary-55 text-xl leading-8 font-bold text-center mb-2">
          {title}
        </h3>
        <p className="text-center text-tertiary-light/87 text-sm px-[12px] leading-loose mb-5">
          {text}
        </p>
        <button onClick={toggleModal} className="rounded-[100px] px-4 py-2 bg-primary-55">Done</button>
      </div>
    </div>
  );
}
