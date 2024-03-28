"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUser } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { RiLinkM } from "react-icons/ri";

import Link from "next/link";
import { BLOGS } from "@/data/Blogs";

export default function Blog() {
  return (
    <section className="bg-[#EBF2F5] py-10 blog">
      <div className="container mx-auto max-w-[1280px]">
        <div className="special-title">
          <Image
            src="/images/special-title.svg"
            alt="special title"
            width={48}
            height={16}
          />
          <p>Great words, need some work</p>
          <h2>Latest blog posts</h2>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop
          spaceBetween={50}
          className="px-5"
        >
          {BLOGS.map((blog) => (
            <SwiperSlide key={blog.id} className="border-2 border-black">
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
                <Link
                  href={`/blog/${blog.slug}`}
                  className="relative basis-2/3 group"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={850}
                    height={560}
                    className="w-full"
                  />
                  <div className="w-[40px]  h-[40px] flex items-center justify-center bg-white group-hover:top-5 group-hover:opacity-100 transition-all top-10 right-5 opacity-0 absolute rounded-full text-lg">
                    <RiLinkM className="hover:fill-main-200 transition-all" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
