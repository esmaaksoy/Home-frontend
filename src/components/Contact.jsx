import { useForm, ValidationError } from "@formspree/react";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import { toastSuccessNotify } from "../helpers/ToastNotify";

const Contact = () => {

  return (
    <>
      <div className="min-h-screen  p-5 sm:p-10 flex justify-center items-center">
        <div className="w-full lg:w-[60%] m-auto bg-[#F6F6F6] p-10">
          {" "}
          <h1 className="text-black text-center text-3xl sm:text-5xl">
            {" "}
            Contact Us
          </h1>
          <form>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col gap-4 sm:gap-6 sm:w-[50%] py-5 sm:py-10 sm:px-3 justify-center">
                {" "}
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="bg-[#F7F7F7] p-4 text-black border-2 border-[#D5D5D5] outline-none"
                  placeholder="Email"
                  autoComplete="off"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="bg-[#F7F7F7] p-4 text-black border-2 border-[#D5D5D5] outline-none"
                  placeholder="Name"
                  autoComplete="off"
                />
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="bg-[#F7F7F7] p-4 text-black border-2 border-[#D5D5D5] outline-none"
                  placeholder="Subject"
                  autoComplete="off"
                />
              </div>
              <div className="sm:w-[50%] sm:py-10 sm:px-3">
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="8"
                  className="bg-[#F7F7F7] w-full p-5 border-2 border-[#D5D5D5] outline-none"
                  placeholder="Message"
                  autoComplete="off"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-5 sm:mt-0">
              <button
                className="group relative inline-block focus:outline-none focus:ring "
                type="submit"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#D5D5D5] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="relative inline-block border-2 border-current dark:border-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  SEND
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
