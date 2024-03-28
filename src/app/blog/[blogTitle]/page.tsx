import { BLOGS } from "@/data/Blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaRegClock, FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function BlogDetails({
  params: { blogTitle },
}: {
  params: { blogTitle: string };
}) {
  const blog = BLOGS.find((blog) => blog.slug === blogTitle);
  const blogIndex = BLOGS.findIndex((blog) => blog.slug === blogTitle);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <section className="pb-48 page bg-[#F5F0EB]">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-[850px] mx-auto flex flex-col gap-10 p-10">
            <h2 className="font-semibold text-[40px] leading-none">
              {blog.title}
            </h2>
            <p className="flex items-center gap-3 justify-center">
              <FaUser /> {blog.author} <FaRegClock /> {blog.date}
            </p>
            <p className="text-xl font-semibold">{blog.description}</p>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div className="container mx-auto">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={788}
            className="mx-auto border-2 border-black rounded-md -translate-y-40"
          />
          <div className="mx-auto max-w-[960px] flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">Introduction</h2>
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
              semper. Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat.
            </p>
            <Image
              src="/images/video-thumbnail.webp"
              alt="blog"
              width={912}
              height={608}
              className="rounded-md"
            />
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
            <div className="bg-slate-50 p-5 border-l-2 border-violet-700">
              <blockquote className="font-bold text-xl mb-5">
                “In a world older and more complete than ours they move finished
                and complete, gifted with extensions of the senses we have lost
                or never attained, living by voices we shall never hear.”
              </blockquote>
              <p>— Olivia Rhye, Product Designer</p>
            </div>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
            <p>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
          </div>
        </div>
        <div className="max-w-[936px] mx-auto px-10 pt-10">
          <h2 className="font-semibold text-3xl mb-5">Conclusion</h2>
          <p className="mb-5">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          pNunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
          condimentum mi massa. In tincidunt pharetra consectetur sed duis
          facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
          dictum eget nibh tortor commodo cursus. Odio felis sagittis, morbi
          feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi
          aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus
          neque ut id eget consectetur dictum. Donec posuere pharetra odio
          consequat scelerisque et, nunc tortor.
        </div>
      </section>
      <section className="bg-[#EBF2F5] p-10">
        <div className="container mx-auto">
          <div className="text-center flex flex-col justify-center items-center">
            <Image
              src="/images/special-title.svg"
              alt="special title"
              width={48}
              height={16}
            />
            <h2 className="mb-10 max-md:text-3xl text-[40px] font-semibold">
              Related Posts
            </h2>
          </div>
          <div className="flex justify-center gap-10 max-w-[1250px] mx-auto">
            <Link
              href="integer-a-nascetur-faucibus-nec-dolor-amet-mattis"
              className="rounded-md border border-black basis-1/2 flex flex-col justify-between"
            >
              <div className="h-full">
                <Image
                  src="/images/blog-4.webp"
                  alt="blog"
                  width={600}
                  height={470}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 flex flex-col gap-5">
                <p className="text-gray-500 flex gap-2  items-center">
                  <FaUser className="fill-gray-500" /> Muffin Group on
                  <FaRegClock className="fill-gray-500" /> November 22, 2023
                </p>
                <h2 className="text-xl font-semibold">
                  Integer a nascetur faucibus nec dolor amet mattis
                </h2>
                <p>
                  Quisque aliquam himenaeos hendrerit cursus aenean fermentum
                  augue accumsan tempor faucibus ante consectetur rutrum eget
                  euismod mus ipsum tincidunt sit dapibus porttitor felis
                  laoreet
                </p>
                <div className="flex justify-between">
                  <span className="flex items-center gap-3 text-gray-500">
                    <FaRegHeart className="fill-main-200" /> 1
                  </span>
                  <span className="text-main-200 border-l-2 pl-2 flex items-center gap-3">
                    <IoNewspaperOutline className="fill-gray-500" />
                    Read more
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="sit-etiam-fames-metus-ornare-nibh-efficitur-sollicitudin"
              className="rounded-md border border-black flex flex-col justify-between basis-1/2"
            >
              <div className="h-full">
                <Image
                  src="/images/blog-5.webp"
                  alt="blog"
                  width={600}
                  height={470}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 flex flex-col gap-5">
                <p className="text-gray-500 flex gap-2  items-center">
                  <FaUser className="fill-gray-500" /> Muffin Group on
                  <FaRegClock className="fill-gray-500" /> November 22, 2023
                </p>
                <h2 className="text-xl font-semibold">
                  Sit etiam fames metus ornare nibh efficitur sollicitudin
                </h2>
                <p>
                  Nostra placerat class dictum fusce pede efficitur venenatis et
                  cras porttitor ligula letius facilisi pharetra iaculis egestas
                  non consectetuer in sapien quis tempus amet
                </p>
                <div className="flex justify-between">
                  <span className="flex items-center gap-3 text-gray-500">
                    <FaRegHeart className="fill-main-200" /> 1
                  </span>
                  <span className="text-main-200 border-l-2 pl-2 flex items-center gap-3">
                    <IoNewspaperOutline className="fill-gray-500" />
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {blogIndex && (
        <Link
          href={BLOGS[blogIndex - 1].slug}
          className="fixed bottom-10 left-0 flex w-[115px] h-[80px] group"
        >
          <div className="bg-main-200 flex items-center w-[35px] h-full justify-center text-2xl">
            <MdOutlineKeyboardArrowLeft className="fill-white" />
          </div>
          <div className="relative w-[80px] z-10">
            <Image
              src={BLOGS[blogIndex - 1].image}
              alt={BLOGS[blogIndex - 1].title}
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute w-[220px] bg-white  p-2 transition-all group-hover:left-28 -left-56 -z-10 duration-500">
            <h2 className="font-semibold">{BLOGS[blogIndex - 1].title}</h2>
            <p className="border-t flex items-center gap-2 text-gray-500">
              <FaRegClock className="fill-gray-500" />
              {BLOGS[blogIndex - 1].date}
            </p>
          </div>
        </Link>
      )}
      {blogIndex < 4 && (
        <Link
          href={BLOGS[blogIndex + 1].slug}
          className="fixed bottom-10 right-0 flex w-[115px] h-[80px] group"
        >
          <div className="relative w-[80px] z-10">
            <Image
              src={BLOGS[blogIndex + 1].image}
              alt={BLOGS[blogIndex + 1].title}
              fill
              objectFit="cover"
            />
          </div>
          <div className="bg-main-200 flex items-center w-[35px] h-full justify-center text-2xl">
            <MdOutlineKeyboardArrowRight className="fill-white" />
          </div>
          <div className="absolute w-[220px] bg-white  p-2 transition-all group-hover:right-28 -right-56 -z-10 duration-500">
            <h2 className="font-semibold">{BLOGS[blogIndex + 1].title}</h2>
            <p className="border-t flex items-center gap-2 text-gray-500">
              <FaRegClock className="fill-gray-500" />
              {BLOGS[blogIndex + 1].date}
            </p>
          </div>
        </Link>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return BLOGS.map((blog) => {
    return {
      blog: blog.slug,
    };
  });
}
