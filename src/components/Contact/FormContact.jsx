import React from "react";
import Button from "../button/Button";

const FormContact = () => {
  return (
    <form className="flex w-full flex-col md:flex-row flex-wrap gap-5 justify-between">
      <div className="flex w-full md:w-[45%] flex-col justify-start items-start">
        <label htmlFor="first">Full Name (required)*</label>
        <input
          type="text"
          name=""
          className="w-full bg-transparent outline-0 border-b-2 border-primary"
          placeholder=""
          id="first"
        />
      </div>
      <div className="flex w-full md:w-[45%] flex-col justify-start items-start">
        <label htmlFor="last">Subject (required)*</label>
        <input
          type="text"
          name=""
          className="w-full bg-transparent outline-0 border-b-2 border-primary"
          placeholder=""
          id="last"
        />
      </div>
      <div className="flex md:w-[45%] w-full flex-col justify-start items-start">
        <label htmlFor="email">Email (required)*</label>
        <input
          type="email"
          name=""
          className="w-full bg-transparent outline-0 border-b-2 border-primary"
          placeholder=""
          id="email"
        />
      </div>
      <div className="flex md:w-[45%] w-full flex-col justify-start items-start">
        <label htmlFor="mobile">Mobile (required)*</label>
        <input
          type="tel"
          name=""
          className="w-full bg-transparent outline-0 border-b-2 border-primary"
          placeholder=""
          id="mobile"
        />
      </div>
      <div className="flex w-full flex-col justify-start items-start">
        <label htmlFor="message">Message (required)*</label>
        <textarea
          name=""
          className="w-full bg-transparent outline-0 border-b-2 border-primary"
          placeholder=""
          id="message"
        ></textarea>
      </div>

     <button className="bg-primary text-black px-3 lg:text-xl lg:py-2 py-3 text-2xl font-bold" type="button">Send Message</button>
    </form>
  );
};


export default FormContact;
