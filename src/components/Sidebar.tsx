"use client";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";

export default function Sidebar({
  isShown,
  setIsShown,
}: {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}) {
  function handleSidebar() {
    setIsShown(false);
  }
  return (
    <aside>
      <div
        className={`overlay ${isShown ? "block" : "hidden"}`}
        onClick={handleSidebar}
      />
      <div
        className={`${
          !isShown ? "-translate-x-full" : "translate-x-0"
        } sidebar`}
      >
        <button className="sidebar__close" onClick={handleSidebar}>
          <FaXmark />
        </button>
        <div className="p-10">
          <h2 className="font-semibold text-lg">Categories</h2>
          <ul className="sidebar__categories">
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/dresses-and-suits.svg"
                  alt="Dresses and suits"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/dresses-and-suits">Dresses and suits</Link>
            </li>
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/blouses-and-tshirts.svg"
                  alt="Blouses & t-shirts"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/blouses-and-t-shirts">Blouses & t-shirts</Link>
            </li>
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/baby-body.svg"
                  alt="Baby body"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/baby-body">Baby body</Link>
            </li>
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/jackets-and-coats.svg"
                  alt="Jackets & Coats"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/jackets-and-coats">Jackets & Coats</Link>
            </li>
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/shoes-and-socks.svg"
                  alt="Shoes & socks"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/shoes-and-socks">Shoes & socks</Link>
            </li>
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/spuds.svg"
                  alt="Spuds"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/spuds">Spuds</Link>
            </li>
            <li className="siebar__categories__item">
              <div className="siebar__categories__item__image">
                <Image
                  src="/images/caps-and-accessories.svg"
                  alt="  Caps & Accessories"
                  width={40}
                  height={40}
                />
              </div>
              <Link href="/shop/caps-and-accessories">Caps & Accessories</Link>
            </li>
          </ul>
          <div className="sidebar__recomended">
            <div className="flex-col flex gap-3">
              <Image
                src="/images/socks.png"
                alt="socks"
                width={100}
                height={100}
              />
              <h5 className="sidebar__recomended__title">Baby Socks</h5>
              <Link
                href="/shop/shoes-and-socks/baby-socks-6Oh"
                className="sidebar__recomended__link"
              >
                Show details <IoIosArrowForward />
              </Link>
            </div>
          </div>
          <a href="tel:610383766284" className="sidebar__tel">
            <MdOutlineHeadsetMic className="sidebar__tel__icon" />
            <span className="sidebar__tel__number">+61 (0) 3 8376 6284</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
