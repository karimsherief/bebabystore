"use client";

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaRegClock } from "react-icons/fa";

export default function page() {
  return (
    <section className="page">
      <div className="container mx-auto">
        <div className="page__title">
          <p>contact</p>
          <h2>Contact with us </h2>
        </div>
        <div className="flex max-md:flex-col justify-center gap-10 items-start mt-10">
          <div className="md:border-r md:basis-1/2 flex flex-col gap-10 pr-10">
            <h2 className="md:text-3xl text-lg font-semibold mb-5">
              Our Headquarters
            </h2>
            <p className="max-w-[300px]">
              Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
            </p>
            <ul className="flex flex-col gap-3 mt-5">
              <li>
                <a
                  href="tel:61383766284"
                  className="flex items-center gap-3 font-semibold text-lg group"
                >
                  <FaPhone className="group-hover:fill-main-200 transition-all" />
                  +61 (0) 3 8376 6284
                </a>
              </li>
              <li>
                <a
                  href="noreply@envato.com"
                  className="flex items-center gap-3 font-semibold text-lg group"
                >
                  <FaEnvelope className="group-hover:fill-main-200 transition-all" />
                  noreply@envato.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-5 border-l-8 pl-5 border-slate-200 py-5  mt-5">
              <FaRegClock className="text-xl" />
              <div>
                <p>Monday - Sunday:</p>
                <p>06:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
          <div className="border border-black rounded-lg p-10">
            <h2 className="md:text-3xl text-lg font-semibold">
              Have a question? Write to us!
            </h2>
            <form>
              <input
                type="text"
                placeholder="Full Name*"
                required
                className="bg-slate-200 p-2 rounded-sm w-full my-2 border-2 focus:bg-main-100 focus:border-main-200 focus:caret-main-200 focus:text-main-300 focus:placeholder:text-main-200"
              />
              <input
                type="tel"
                placeholder="Phone*"
                required
                className="bg-slate-200 p-2 rounded-sm w-full my-2 border-2 focus:bg-main-100 focus:border-main-200 focus:caret-main-200 focus:text-main-300 focus:placeholder:text-main-200"
              />
              <input
                type="email"
                placeholder="E-mail address*"
                required
                className="bg-slate-200 p-2 rounded-sm w-full my-2 border-2 focus:bg-main-100 focus:border-main-200 focus:caret-main-200 focus:text-main-300 focus:placeholder:text-main-200"
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                className="bg-slate-200 p-2 rounded-sm w-full my-2 border-2 focus:bg-main-100 focus:border-main-200 focus:caret-main-200 focus:text-main-300 focus:placeholder:text-main-200"
              />
              <button className="px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all">
                send a message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <iframe
          className="w-full"
          height="580"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </section>
  );
}
