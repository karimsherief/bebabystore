"use client";
import Image from "next/image";
import Link from "next/link";
import { RiLinkM } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function BestSellers() {
  return (
    <section className="p-5">
      <div className="container mx-auto">
        <div className="special-title">
          <Image
            src="/images/special-title.svg"
            alt="special title"
            width={48}
            height={16}
          />
          <p>Kids love this stuff</p>
          <h2>Our Bestsellers</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 my-10">
          <Link href="/shop/blouses-and-t-shirts/girl-blouse-4cO">
            <div className="relative group">
              <Image
                src="/images/girl-blouse.webp"
                alt="girl blouse"
                width={296}
                height={296}
              />
              <RiLinkM className="absolute top-1/2 right-0 text-xl group-hover:top-0 transition-all opacity-0 group-hover:opacity-100 hover:fill-main-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Girl blouse</h2>
              <p>$38.00 - $46.00</p>
            </div>
          </Link>
          <Link href="/shop/shoes-and-socks/baby-slippers-kxr">
            <div className="relative group">
              <Image
                src="/images/baby-slippers.webp"
                alt="Baby slippers"
                width={296}
                height={296}
              />
              <RiLinkM className="absolute top-1/2 right-0 text-xl group-hover:top-0 transition-all opacity-0 group-hover:opacity-100 hover:fill-main-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Baby slippers</h2>
              <p>$11.00 - $16.00</p>
            </div>
          </Link>
          <Link href="/shop/dresses-and-suits/cardigan-longsleeve">
            <div className="relative group">
              <Image
                src="/images/cardigan-longsleeve.webp"
                alt="Cardigan longsleeve"
                width={296}
                height={296}
              />
              <RiLinkM className="absolute top-1/2 right-0 text-xl group-hover:top-0 transition-all opacity-0 group-hover:opacity-100 hover:fill-main-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Cardigan longsleeve</h2>
              <p>$66.00</p>
            </div>
          </Link>
          <Link href="/shop/dresses-and-suits/sweater">
            <div className="relative group">
              <Image
                src="/images/sweater.webp"
                alt="Sweater"
                width={296}
                height={296}
              />
              <RiLinkM className="absolute top-1/2 right-0 text-xl group-hover:top-0 transition-all opacity-0 group-hover:opacity-100 hover:fill-main-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Sweater</h2>
              <p>$142.00 - $150.00</p>
            </div>
          </Link>
          <div className="relative h-[367px] w-[600px] p-10 max-sm:px-2">
            <Image
              src="/images/summer-madness.webp"
              alt="summer madness"
              fill
              objectFit="cover"
            />
            <div className="bg-main-200 w-full max-w-[250px] p-5 z-10 relative">
              <h2 className="text-3xl font-semibold">Summer Madness</h2>
              <p>
                Promotion on clothes from previous collections that are sold at
                reduced prices
              </p>
              <Link
                href="#"
                className="flex items-center mx-auto my-5 gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
              >
                Promotions
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
          <Link href="/shop/shoes-and-socks/baby-socks-6Oh">
            <div className="relative group">
              <Image
                src="/images/socks.png"
                alt="Baby Socks"
                width={296}
                height={296}
              />
              <RiLinkM className="absolute top-1/2 right-0 text-xl group-hover:top-0 transition-all opacity-0 group-hover:opacity-100 hover:fill-main-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Baby Socks</h2>
              <p>$15.00 - $19.00</p>
            </div>
          </Link>
          <Link href="/shop/dresses-and-suits/sleeveless-cardigan">
            <div className="relative group">
              <Image
                src="/images/sleeveless-cardigan.webp"
                alt="Sleeveless Cardigan"
                width={296}
                height={296}
              />
              <RiLinkM className="absolute top-1/2 right-0 text-xl group-hover:top-0 transition-all opacity-0 group-hover:opacity-100 hover:fill-main-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Sleeveless Cardigan</h2>
              <p>$115.00 - $122.00</p>
            </div>
          </Link>
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} loop className="my-10">
        <SwiperSlide className="h-[600px] relative flex items-center md:pl-32 sm:pl-20 px-10">
          <Image
            src="/images/autumn.webp"
            alt="autumn"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="relative z-10 flex flex-col items-start max-md:max-w-[350px] max-sm:items-center max-sm:text-center">
            <span className="border-2 border-black rounded-md px-2 py-1">
              2023
            </span>
            <h2 className="md:text-4xl text-2xl font-semibold my-4">
              New Autumn 2023 Collection
            </h2>
            <p className="text-sm">
              Pede tellus lacinia ultrices faucibus dapibus ex pulvinar semper
              lobortis
            </p>
            <Link
              href="#"
              className="flex items-center my-5 gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
            >
              Products
              <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[600px] relative flex items-center md:pl-32 sm:pl-20 px-10">
          <Image
            src="/images/winter.webp"
            alt="winter"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="relative z-10 flex flex-col items-start max-md:max-w-[350px] max-sm:items-center max-sm:text-center">
            <span className="border-2 border-black rounded-md px-2 py-1">
              2023
            </span>
            <h2 className="md:text-4xl text-2xl font-semibold my-4">
              Get ready to winter with our TOP class clothes
            </h2>
            <p className="text-sm">
              Quis ipsum convallis vivamus augue mattis faucibus nec habitasse
              orci curabitur condimentum maximus himenaeos odio
            </p>
            <Link
              href="#"
              className="flex items-center my-5 gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
            >
              Products
              <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
