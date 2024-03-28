"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// TODO: Timer
export default function Banner() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // useEffect(() => {
  //   // let timer = setInterval(() => {
  //   //   setSeconds((prev) => (prev === 0 ? 59 : prev - 1));
  //   //   if (seconds === 0) {
  //   //     setMinutes((prev) => (prev === 0 ? 59 : prev - 1));
  //   //     if (minutes === 0) {
  //   //       setHours((prev) => (prev === 0 ? 23 : prev - 1));
  //   //       if (hours === 0) {
  //   //         setDays((prev) => (prev === 0 ? 7 : prev - 1));
  //   //       }
  //   //     }
  //   //   }
  //   // }, 1000);
  //   // return () => {
  //   //   clearInterval(timer);
  //   // };
  // }, [days, hours, minutes, seconds]);
  return (
    <div className="my-10 pt-48 px-5">
      <div className="container mx-auto max-w-[1600px]">
        <div className="flex gap-8 max-lg:flex-col">
          {/* Slider */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="basis-3/5"
            loop
          >
            <SwiperSlide className="relative rounded-lg  px-12 py-20 flex items-center">
              <Image
                src="/images/slider-1.webp"
                alt="slider"
                className="rounded-lg -z-10"
                fill
                objectFit="cover"
              />
              <div className="flex flex-col gap-10 items-start max-w-[250px] ">
                <h2 className="text-white text-[40px] leading-10 font-bold">
                  Our Orange Collection
                </h2>
                <p className="text-white">
                  Montes orci platea inceptos conubia mauris lacus facilisi
                  tincidunt cras rutrum
                </p>
                <button className="flex items-center gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all">
                  Buy Now
                  <IoIosArrowForward />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative rounded-lg px-12 py-20 flex items-center">
              <Image
                src="/images/slider-2.webp"
                alt="slider"
                className="rounded-lg -z-10"
                fill
                objectFit="cover"
              />
              <div className="flex flex-col gap-10 items-start max-w-[250px] ">
                <h2 className="text-white text-[40px] leading-10 font-bold">
                  Our yelow Collection
                </h2>
                <p className="text-white">
                  Finibus sagittis felis semper gravida euismo
                </p>
                <button className="flex items-center gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all">
                  Buy Now
                  <IoIosArrowForward />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative rounded-lg px-12 py-20 flex items-center">
              <Image
                src="/images/slider-3.webp"
                alt="slider"
                className="rounded-lg -z-10"
                fill
                objectFit="cover"
              />
              <div className="flex flex-col gap-10 items-start max-w-[250px] ">
                <h2 className="text-white text-[40px] leading-10 font-bold">
                  Our casual Collection
                </h2>
                <p className="text-white">
                  Pellentesque netus aliquet dictum curae praesent
                </p>
                <button className="flex items-center gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all">
                  Buy Now
                  <IoIosArrowForward />
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="bg-[#CADEE5] basis-2/5 p-10 text-center rounded-lg">
            <h2 className="text-[40px] font-semibold">Special offer</h2>
            <p>Baby slippers</p>
            <Image
              src="/images/baby-slippers.webp"
              alt="special offer"
              width={200}
              height={200}
              className="mx-auto"
            />
            <div className="flex justify-center gap-10 max-sm:flex-col">
              <div>
                <p className="text-4xl font-semibold">
                  {days < 10 ? `0${days}` : days}
                </p>
                <p className="text-lg">Days</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">
                  {hours < 10 ? `0${hours}` : hours}
                </p>
                <p className="text-lg">Hours</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">
                  {minutes < 10 ? `0${minutes}` : minutes}
                </p>
                <p className="text-lg">Minutes</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
                <p className="text-lg">Seconds</p>
              </div>
            </div>
            <Link
              href="/shop/shoes-and-socks/baby-slippers-kxr"
              className="flex items-center w-fit mx-auto my-5 gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
            >
              Buy Now
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-5 mt-5">
          <Link
            href="/shop/caps-and-accessories"
            className="bg-[#F0F5F7] rounded-lg p-5 flex w-full"
          >
            <div className="flex flex-col gap-5">
              <h4 className="text-2xl font-semibold">Caps & Accessories</h4>
              <p>Suspendisse consequat sed velit amet commodo</p>
              <button className="flex items-center gap-5 font-semibold">
                Buy now <FaArrowRightLong />
              </button>
            </div>
            <div className="relative max-w-[180px] w-full">
              <Image
                src="/images/banner-1.webp"
                alt="Caps & Accessories"
                fill
                objectFit="contain"
              />
            </div>
          </Link>
          <Link
            href="/shop/shoes-and-socks"
            className="bg-[#F0F5F7] rounded-lg p-5 flex w-full"
          >
            <div className="flex flex-col gap-5">
              <h4 className="text-2xl font-semibold">Shoes & Socks</h4>
              <p>Suspendisse consequat sed velit amet commodo</p>
              <button className="flex items-center gap-5 font-semibold">
                Buy now <FaArrowRightLong />
              </button>
            </div>
            <div className="relative max-w-[180px] w-full">
              <Image
                src="/images/banner-2.webp"
                alt="Shoes & Socks"
                fill
                objectFit="contain"
              />
            </div>
          </Link>
          <Link
            href="/shop/jackets-and-coats"
            className="bg-[#F0F5F7] rounded-lg p-5 flex w-full"
          >
            <div className="flex flex-col gap-5">
              <h4 className="text-2xl font-semibold">Jackets & Coats</h4>
              <p>Suspendisse consequat sed velit amet commodo</p>
              <button className="flex items-center gap-5 font-semibold">
                Buy now <FaArrowRightLong />
              </button>
            </div>
            <div className="relative max-w-[180px] w-full">
              <Image
                src="/images/cardigan-longsleeve.webp"
                alt="Jackets & Coats"
                fill
                objectFit="contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
