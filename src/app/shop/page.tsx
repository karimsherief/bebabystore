import { Breadcrumb } from "@/components";
import { CategoriesProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Shop() {
  const categories: CategoriesProps[] = await getCategories();

  return (
    <section className="page">
      <div className="container mx-auto">
        <div className="border-b border-dashed py-10">
          <h2 className="text-6xl font-semibold mb-5">Shop</h2>
          <Breadcrumb />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {categories?.map((category) => (
            <Link
              href={`/shop/${category.slug}`}
              key={category.slug}
              className="md:w-1/4 flex flex-col items-center group transition-all hover:scale-105 text-center px-5"
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={200}
                height={200}
              />
              <h2 className="font-semibold text-2xl transition-all group-hover:text-main-300">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getCategories() {
  const res = await fetch(
    "https://competition-e-commerce-backend-1.vercel.app/categories"
  );

  const data = await res.json();

  return data.categories;
}
