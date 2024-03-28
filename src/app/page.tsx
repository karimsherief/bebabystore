import { Banner, BestSellers, Blog, Testimonial, TopRated } from "./_home";

export default function Home() {
  return (
    <main>
      <Banner />
      <BestSellers />
      <TopRated />
      <Testimonial />
      <Blog />
    </main>
  );
}
