import { BLOGS } from "@/data/Blogs";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaUser } from "react-icons/fa6";
import { RiLinkM } from "react-icons/ri";

export default function Blog() {
  return (
    <section className="bg-[#F5F0EB] bg-[url('/images/blog-bg.svg')] bg-[top_right] bg-no-repeat page">
      <div className="container mx-auto max-w-[1280px]">
        <div className="page__title">
          <p>Blog</p>
          <h2>Latest blog posts</h2>
        </div>
        <div className="px-5 flex flex-col gap-5 my-10">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="border-2 border-black">
              <div className="flex max-md:flex-col">
                <div className="bg-white p-5 basis-1/3">
                  <div className="border-b">
                    <p className="flex items-center gap-5 text-sm py-5">
                      <FaUser /> {blog.author} <FaRegClock /> {blog.date}
                    </p>
                  </div>
                  <div className="py-5 pr-5 flex flex-col gap-5">
                    <h5 className="font-semibold text-lg">{blog.title}</h5>
                    <p>{blog.description}</p>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-main-200 hover:text-main-400 hover:underline"
                    >
                      read more
                    </Link>
                  </div>
                </div>
                <Link href="#" className="relative basis-2/3 group">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={850}
                    height={560}
                    className="w-full"
                  />
                  <div className="w-[40px]  h-[40px] flex items-center justify-center bg-white group-hover:top-5 group-hover:opacity-100 transition-all top-10 right-5 opacity-0 absolute rounded-full text-lg">
                    <RiLinkM />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


