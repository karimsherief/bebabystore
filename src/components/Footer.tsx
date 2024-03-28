import Image from "next/image";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto max-w-[1280px]">
        <section className="py-5">
          <div className="contact">
            <div className="contact__image">
              <Image
                src="/images/email.svg"
                alt="email"
                width={152}
                height={152}
              />
              <div className="max-w-[420px]">
                <p className="mb-3">Sign up for the newsletter</p>
                <h3 className="text-3xl font-semibold">
                  Receive a{" "}
                  <span className="bg-secondary px-2 border-2 border-black rounded-lg">
                    10%
                  </span>{" "}
                  discount on your purchases
                </h3>
              </div>
            </div>
            <form className="contact__form">
              <h4 className="text-center text-2xl font-semibold">
                Join our newsletter.
              </h4>
              <input
                type="email"
                required
                placeholder="E-mail address*"
                className="contact__form__input"
              />
              <button className="contact__form__submit">Subscribe Now</button>
            </form>
          </div>
          <div className="usefull__links">
            <div>
              <a
                href="tel:61383766284"
                className="hover:scale-105 w-fit transition-all flex gap-5 group max-md:mx-auto max-sm:flex-col max-sm:items-center"
              >
                <div className="sm:border-r-2">
                  <MdOutlineHeadsetMic className="text-5xl sm:mr-5" />
                </div>
                <div>
                  <p className="transition-all group-hover:text-main-300">
                    Got a questions? Call us 24/7!
                  </p>
                  <h4 className="text-xl font-semibold">+61 (0) 383 766 284</h4>
                </div>
              </a>
              <p className="my-5 text-gray-400 md:max-w-[300px]">
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
              </p>
              <ul className="flex gap-5 text-2xl max-md:justify-center">
                <li className="flex items-center justify-center w-[48px] h-[48px] rounded-full border-2 border-gray-200 hover:border-main-400 hover:-translate-y-2 group transition-all">
                  <a href="#">
                    <FaFacebookF className="group-hover:fill-main-400 transition-all" />
                  </a>
                </li>
                <li className="flex items-center justify-center w-[48px] h-[48px] rounded-full border-2 border-gray-200 hover:border-main-400 hover:-translate-y-2 group transition-all">
                  <a href="#">
                    <FaInstagram className="group-hover:fill-main-400 transition-all" />
                  </a>
                </li>
                <li className="flex items-center justify-center w-[48px] h-[48px] rounded-full border-2 border-gray-200 hover:border-main-400 hover:-translate-y-2 group transition-all">
                  <a href="#">
                    <FaPinterestP className="group-hover:fill-main-400 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-5">Customer service</h6>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Account details
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Lost password
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-5">Useful links</h6>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-5">Delivery</h6>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    Free Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-all hover:text-main-400 text-sm font-semibold"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="copyright">
          <p>
            © 2024 Betheme by{" "}
            <a
              href="https://muffingroup.com/"
              target="_blank"
              className="hover:underline hover:text-main"
            >
              Muffin group
            </a>{" "}
            | All Rights Reserved | Powered by{" "}
            <a
              href="https://wordpress.org/"
              target="_blank"
              className="hover:underline hover:text-main"
            >
              WordPress
            </a>
          </p>
          <ul className="flex gap-2 flex-wrap">
            <li>
              <Image src="/images/visa.svg" alt="visa" width={40} height={50} />
            </li>
            <li>
              <Image
                src="/images/dinersclub.svg"
                alt="diners club"
                width={40}
                height={50}
              />
            </li>
            <li>
              <Image src="/images/amex.svg" alt="amex" width={40} height={50} />
            </li>
            <li>
              <Image
                src="/images/discover.svg"
                alt="discover"
                width={40}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/images/mastercard.svg"
                alt="mastercard"
                width={40}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/images/maestro.svg"
                alt="maestro"
                width={40}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/images/stripe.svg"
                alt="stripe"
                width={40}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/images/paypal.svg"
                alt="paypal"
                width={40}
                height={50}
              />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
