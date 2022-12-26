import React, {useState} from 'react'
import Modal from './Modal';

export default function SubscribeForm() {

  const [modalShow, setModalShow] = useState(false);

  function submit(e){
    e.preventDefault();
    setModalShow(true);
  }

  return (
    <form
      action="/"
      method="POST"
      className="flex justify-between gap-6 tablet:flex-col"
    >
      <div className="w-full">
        <label
          htmlFor="emailInput"
          className="text-sm leading-6 text-tertiary-light"
        >
          Email Address
        </label>
        <br />
        <input
          type="text"
          name="emailInput"
          id="emailInput"
          placeholder="Please enter your email"
          className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light/87"
          required
        />
      </div>
      <button
        onClick={(e) => submit(e)}
        className="py-1.5 px-3 laptop:py-2 laptop:px-4 bg-primary-55 hover:bg-primary-65 active:bg-primary-75 text-secondary-dark rounded-full self-end tablet:self-start laptop:self-start text-base laptop:text-lg"
      >
        Subscribe
      </button>
      {modalShow ? (
        <Modal
          modalShow={modalShow}
          setModalShow={setModalShow}
          title="Subscribed!"
          text="Thank you for subscribing to our email newsletter! Keep an eye out for
          promotional offers in your inbox."
        />
      ) : (
        ""
      )}
    </form>
  );
}
