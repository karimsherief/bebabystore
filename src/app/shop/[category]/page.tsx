import { Breadcrumb } from "@/components";
import { ProductProps } from "@/types";
import { formatCurrency } from "@/utils/FormatCurrency";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function CategoryProducts({
  params: { category },
}: {
  params: { category: string };
}) {
  const products: ProductProps[] = await getCategoryProducts(category);
  return (
    <section className="page">
      <div className="container mx-auto">
        <div className="border-b border-dashed py-10">
          <h2 className="text-6xl font-semibold mb-5">Shop</h2>
          <Breadcrumb />
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Link
              href={`${category}/${product.slug}`}
              key={product.slug}
              className="md:w-1/4 flex flex-col items-center  text-center px-5"
            >
              <Image
                src={product.images[0].secure_url}
                alt={product.name}
                width={300}
                height={300}
              />
              <h2 className="font-semibold text-2xl">{product.name}</h2>
              <div className="flex gap-3 justify-center mt-2">
                {product.sizes[0].colors.map((color) => (
                  <Link
                    href={`${category}/${product.slug}?color=${color.name}`}
                    className="w-5 rounded-full outline-gray-300 outline-1 outline border-white border h-5 relative group"
                    style={{ backgroundColor: `#${color.hex}` }}
                    key={color._id}
                  >
                    <div className="absolute before:content-[''] before:-bottom-2/3 text-xs before:left-1/2 before:absolute before:-translate-x-1/2  before:border-[10px] before:border-[#444_transparent_transparent_transparent] transition-all group-hover:opacity-100 -z-10 group-hover:z-10 opacity-0 group-hover:-translate-y-10 left-1/2 -translate-x-1/2 bg-[#444] text-white w-fit capitalize  rounded-sm shadow-lg py-1 px-2 text-nowrap">
                      {color.name}
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 mt-3 text-lg">
                {product.sizes[0].price ===
                product.sizes[product.sizes.length - 1].price
                  ? formatCurrency(product.sizes[0].price)
                  : `${formatCurrency(product.sizes[0].price)} -
                    ${formatCurrency(
                      product.sizes[product.sizes.length - 1].price
                    )}`}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

 async function getCategoryProducts(category: string) {
  const res = await fetch(
    `https://competition-e-commerce-backend-1.vercel.app/categories/${category}`
  );
  const data = await res.json();
  if (data.message === "failed") {
    notFound();
  }
  return data.products;
}
