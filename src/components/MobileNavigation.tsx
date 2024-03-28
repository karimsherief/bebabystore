"use client";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";

export default function MobileNavigation({
  setIsShown,
}: {
  setIsShown: (value: boolean) => void;
}) {
  return (
    <div className="mobile__navigation">
      <ul>
        <li>
          <Link href="/shop">
            <HiOutlineSquares2X2 />
          </Link>
        </li>
        <li>
          <Link href="/account">
            <LuUser2 />
          </Link>
        </li>
        <li>
          <button
            className="mobile__navigation__cart"
            onClick={() => setIsShown(true)}
          >
            <div className="relative">
              <IoBagOutline className="mobile__navigation__cart__icon" />
              <span className="mobile__navigation__cart__count">0</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
