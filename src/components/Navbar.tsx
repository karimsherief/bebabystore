"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { Cart, MobileNavigation, Sidebar } from ".";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isCartShown, setIsCartShown] = useState(false);
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (navbarRef.current != null) {
        navbarRef.current.style.top = `-${
          window.scrollY / 13 < 13 ? window.scrollY / 13 : 13
        }%`;
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="container mx-auto p-5">
          <div className="flex items-center justify-between gap-5">
            <div>
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  className="max-md:w-[80px]"
                  alt="logo"
                  width={130}
                  height={100}
                  quality={100}
                />
              </Link>
            </div>
            <div className="navbar__search">
              <IoMdSearch className="navbar__search__icon" />
              <input
                placeholder="Enter your search"
                className="navbar__search__input"
              />
            </div>
            <ul className="flex gap-4">
              <li>
                <a href="tel:610383766284" className="navbar__tel">
                  <MdOutlineHeadsetMic className="navbar__tel__icon" />
                  <span className="navbar__tel__number">
                    +61 (0) 3 8376 6284
                  </span>
                </a>
              </li>
              <li>
                <button
                  className="navbar__cart"
                  onClick={() => setIsCartShown(true)}
                >
                  <div className="relative">
                    <IoBagOutline className="navbar__cart__icon" />
                    <span className="navbar__cart__count">0</span>
                  </div>
                  <span className="navbar__cart__price">$0.00</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="container mx-auto">
          <div className="flex items-center p-3 gap-5 max-md:justify-between">
            <button
              className="all-categories"
              onClick={() => setIsSidebarShown(true)}
            >
              <HiBars3 className="text-3xl" />
              <span className="text-sm">All categories</span>
            </button>
            <ul
              className={`navbar__list ${
                isMenuShown
                  ? "max-md:-bottom-[127%]"
                  : "max-md:bottom-0 max-md:-z-50 max-md:opacity-0"
              }`}
            >
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <a href="#" className="navbar__outlet">
              Outlet
            </a>
            <button
              className="navbar__toggle__menu"
              onClick={() => setIsMenuShown((prev) => !prev)}
            >
              <HiBars3 className="navbar__toggle__menu__icon" />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar isShown={isSidebarShown} setIsShown={setIsSidebarShown} />
      <Cart isShown={isCartShown} setIsShown={setIsCartShown} />
      <MobileNavigation setIsShown={setIsCartShown} />
    </>
  );
}
