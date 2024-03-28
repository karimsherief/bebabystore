"use client";
import { IoBagOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

export default function Cart({
  isShown,
  setIsShown,
}: {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}) {
  function handleCart() {
    setIsShown(false);
  }
  return (
    <aside>
      <div
        className={`overlay ${isShown ? "block" : "hidden"}`}
        onClick={handleCart}
      />
      <div
        className={`${!isShown ? "translate-x-full" : "translate-x-0"} cart`}
      >
        <div className="cart__header">
          <button onClick={handleCart} className="close__cart">
            <FaXmark />
          </button>
          <div className="flex items-center gap-3 mx-auto">
            <IoBagOutline className="text-xl" />
            <h3>Cart</h3>
          </div>
        </div>
        <div className="cart__items "></div>
        <div className="cart__footer p-5 bg-gray-100">
          <p className="flex justify-between border-b pb-2">
            subtotal:
            <span>$0.00</span>
          </p>
          <p className="flex justify-between mt-3">
            total:
            <span className="font-bold">$0.00</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
