"use client";

import { Breadcrumb } from "@/components";
import { ProductProps } from "@/types";
import { formatCurrency } from "@/utils/FormatCurrency";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails({ product }: { product: ProductProps }) {
  const [activeColor, setActiveColor] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(1);
  const params = useSearchParams();

  useEffect(() => {
    let color = params.get("color");
    if (color) {
      setActiveColor(color);
    }
  }, [params]);
  return (
    <div className="flex justify-center gap-10 px-20">
      <Image
        src={product.images[0].secure_url}
        alt={product.name}
        width={740}
        height={740}
        className="rounded-md border basis-3/5"
      />
      <div className="basis-2/5 flex flex-col gap-10">
        <Breadcrumb />
        <h2 className="text-4xl  font-semibold">{product.name}</h2>
        <p>
          Curabitur duis magnis conubia nec potenti blandit malesuada ligula id
          cras dui mauris tellus faucibus morbi natoque dictum amet convallis
          ante
        </p>
        <p className="font-semibold">
          {product.sizes[0].price ===
          product.sizes[product.sizes.length - 1].price
            ? formatCurrency(product.sizes[0].price)
            : `${formatCurrency(product.sizes[0].price)} -
                    ${formatCurrency(
                      product.sizes[product.sizes.length - 1].price
                    )}`}
        </p>
        <div className="flex gap-5 items-center border-b pb-5">
          <p>Select color</p>
          <ul className="flex gap-3">
            {product.sizes[0].colors.map((color) => (
              <li
                key={color._id}
                className={`${
                  activeColor === color.name
                    ? "outline-black"
                    : "outline-gray-300"
                } w-7 outline-2 outline rounded-full h-7 relative border-white border-2 group cursor-pointer`}
                style={{ backgroundColor: `#${color.hex}` }}
                onClick={() => setActiveColor(color.name)}
              >
                <div className="absolute before:content-[''] before:-bottom-2/3 text-xs before:left-1/2 before:absolute before:-translate-x-1/2  before:border-[10px] before:border-[#444_transparent_transparent_transparent] transition-all group-hover:opacity-100 -z-10 group-hover:z-10 opacity-0 group-hover:-translate-y-10 left-1/2 -translate-x-1/2 bg-[#444] text-white w-fit capitalize  rounded-sm shadow-lg py-1 px-2 text-nowrap">
                  {color.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <p>Age</p>
          <select
            name="age"
            id="age"
            onChange={(e) => setPrice(+e.target.value)}
            className="bg-slate-200 p-2 rounded-sm border-2 focus:bg-main-100 focus:border-main-200 focus:caret-main-200 focus:text-main-300 focus:placeholder:text-main-200"
          >
            <option selected disabled>
              Choose an option
            </option>
            {product.sizes.map((size) => (
              <option key={size._id} value={size.price}>
                {size.size}
              </option>
            ))}
          </select>
        </div>
        <p className="text-main-200 text-2xl">{formatCurrency(price)}</p>
        <div
          className={`flex gap-3 items-center bg-white transition-all ${
            !price || !activeColor ? "-translate-y-24" : ""
          }`}
        >
          <div className="flex items-center border bg-slate-50 w-36 py-3 justify-between px-4 text-xl">
            <button
              disabled={count === 1}
              onClick={() => setCount((prev) => prev - 1)}
              className="font-semibold"
            >
              -
            </button>
            <span className="text-gray-400">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="font-semibold"
            >
              +
            </button>
          </div>
          <button className="py-3 text-center bg-secondary hover:bg-[#DE8D59] w-80 rounded-md hover:text-white transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
