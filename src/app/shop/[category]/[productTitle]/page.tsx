import { ProductProps } from "@/types";
import ProductDetails from "./ProductDetails";

export default async function Page({
  params: { productTitle },
}: {
  params: { productTitle: string };
}) {
  const product: ProductProps = await getProductDetails(productTitle);

  return (
    <section className="page">
      <div className="container mx-auto">
        <ProductDetails product={product} />
      </div>
    </section>
  );
}

async function getProductDetails(title: string) {
  const res = await fetch(
    `https://competition-e-commerce-backend-1.vercel.app/products/${title}`
  );
  const data = await res.json();

  return data.product;
}
