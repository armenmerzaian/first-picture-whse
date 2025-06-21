import React, {useState} from 'react'
import Modal from "../components/Modal";
import "../styles/form-errors.css";
import "../styles/webkit-styles.css"

export default function ContactForm() {
  const [modalShow, setModalShow] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);
  

  function handleClick(e) {

    let data = new FormData(e.target);
    let action = "https://www.formbackend.com/f/ee9a0bc3399546a1";
    let request = new XMLHttpRequest();
    request.open("POST", action, true);
    request.onerror = function() {
      //request failed
      setErrorModalShow(true);
    }
    request.send(data);
    setModalShow(true);
    e.preventDefault();
    document.getElementById("contact-form").reset(); 
  }

  // action="https://formspree.io/f/xzbwpnlz"
  // method="POST"
  return (
    <div className="p-4 tablet:p-8 rounded-2xl bg-surface-6 shadow-sm laptop:pb-9  h-full">
      <h1 className="text-primary-55 text-lg laptop:text-2xl font-semibold mb-6 webkit-padding">
        Send Us A Message
      </h1>
      <form
        acceptCharset="UTF-8"
        className="tablet:grid space-y-[36px] tablet:space-y-0 grid-cols-1 tablet:grid-cols-2 gap-8"
        onSubmit={handleClick}
        id="contact-form"
      >
        <div className="flex flex-col">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-base text-tertiary-light h-7 order-3 justify-start"
            required
            minLength={2}
          />
          <label
            htmlFor="first_name"
            className="text-base leading-6 text-tertiary-light order-1"
          >
            First Name
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-base text-tertiary-light h-7 order-3"
            required
            minLength={2}
          />
          <label
            htmlFor="last_name"
            className="text-base leading-6 text-tertiary-light order-1"
          >
            Last Name
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="email"
            id="emailInput"
            placeholder="Enter your email"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-base text-tertiary-light h-7 order-3"
            required
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
          <label
            htmlFor="emailInput"
            className="text-base leading-6 text-tertiary-light order-1"
          >
            Email
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            name="tel_number"
            id="tel_number"
            placeholder="Enter your phone number"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none pl-0 text-base text-tertiary-light h-7 order-3"
            required
            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          />
          <label
            htmlFor="tel_number"
            className="text-base leading-6 text-tertiary-light order-1"
          >
            Phone
          </label>
        </div>
        <div className="flex flex-col col-span-2">
          <textarea
            type="text"
            name="message"
            className="w-full bg-transparent rounded-lg mt-1 text-base resize-none h-[179px] order-2 text-tertiary-light"
            placeholder="Send us a message..."
            required
            maxLength={300}
          />
          <label
          htmlFor='message' 
          className="laptop:col-span-full text-base leading-6 text-tertiary-light order-1">
            Message
          </label>
        </div>
        <button className="w-fit ml-auto font-semibold rounded-[100px] px-4 py-2 bg-primary-55 hover:bg-primary-65 active:bg-primary-75 tablet:col-span-full max-h-12">
          Send Message
        </button>
      </form>
      {modalShow ? (
        <Modal
          modalShow={modalShow}
          setModalShow={setModalShow}
          title="Message Sent!"
          text="Thank you for sending us a message, we will get back to you as soon as possible!"
        />
      ) : (
        ""
      )}
      {errorModalShow ? (
        <ErrorModal
          errorModalShow={errorModalShow}
          setErrorModalShow={setErrorModalShow}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function ErrorModal({ errorModalShow, setErrorModalShow}) {
  function toggleModal() {
    setErrorModalShow(!errorModalShow);
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
            <path d="M24 35.25q1.2 0 1.975-.75.775-.75.775-1.95t-.775-2q-.775-.8-1.975-.8-1.2 0-1.975.8-.775.8-.775 2t.775 1.95q.775.75 1.975.75Zm-2.2-8.85h4.7V12.9h-4.7ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.75T2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.75-4.55Q19.55 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.45-1.675 8.3-1.675 3.85-4.55 6.725-2.875 2.875-6.75 4.55Q28.45 45.25 24 45.25Zm.05-4.7q6.85 0 11.675-4.825Q40.55 30.9 40.55 23.95q0-6.85-4.825-11.675Q30.9 7.45 24 7.45q-6.9 0-11.725 4.825Q7.45 17.1 7.45 24q0 6.9 4.825 11.725Q17.1 40.55 24.05 40.55ZM24 24Z" />
          </svg>
        </span>
        <h3 className="text-primary-55 text-xl leading-8 font-bold text-center mb-2">
          Oops!
        </h3>
        <p className="text-center text-tertiary-light/87 text-base laptop:text-base px-[12px] leading-loose mb-5">
          Your form could not be submitted.{" "}
          <span className="block">Try again later.</span>
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

