import React, {useState} from 'react'
import Modal from "../components/Modal";

export default function ContactForm() {
  const [modalShow, setModalShow] = useState(false);

  function handleClick(e) {
    /* e.preventDefault(); */
    setModalShow(true);
  }

  // action="https://formspree.io/f/xzbwpnlz"
  return (
    <div className="p-4 laptop:p-8 rounded-2xl bg-surface-6 shadow-md">
      <h1 className="text-primary-55 text-lg laptop:text-2xl font-semibold mb-6">
        Send Us A Message
      </h1>
      <form
        accept-charset="UTF-8"
        action="https://www.formbackend.com/f/08da67ac6f24201c"
        method="POST"
        className="grid grid-cols-1 laptop:grid-cols-2 gap-8"
      >
        <div>
          <label
            htmlFor="first_name"
            className="text-sm leading-6 text-tertiary-light text-semantic-error"
          >
            First Name
          </label>
          <br />
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light h-7 caret-semantic-error"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last"
            className="text-sm leading-6 text-tertiary-light"
          >
            Last Name
          </label>
          <br />
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light h-7"
            required
          />
        </div>
        <div>
          <label
            htmlFor="emailInput"
            className="text-sm leading-6 text-tertiary-light"
          >
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            id="emailInput"
            placeholder="Enter your email"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light  h-7"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tel_number"
            className="text-sm leading-6 text-tertiary-light"
          >
            Phone
          </label>
          <br />
          <input
            type="tel"
            name="tel_number"
            id="tel_number"
            placeholder="Enter your phone number"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none pl-0 text-sm text-tertiary-light  h-7"
            required
          />
        </div>
        <label className="laptop:col-span-full text-sm leading-6 text-tertiary-light">
          Message
          <textarea
            type="text"
            name="message"
            className="w-full bg-transparent rounded-lg mt-1 text-sm resize-none h-[179px]"
            placeholder="Send us a message..."
            required
          />
        </label>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="w-fit ml-auto font-semibold rounded-[100px] px-4 py-2 bg-primary-55 hover:bg-primary-65 active:bg-primary-75 laptop:col-span-full max-h-12"
        >
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
    </div>
  );
}
