import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function About() {
  return (
    <main className="pt-48">
      <section className="relative h-[calc(100vh-90px)] py-20 flex items-center">
        <div className="max-w-[700px] md:max-w-[1200px] lg:max-w-[1280px]  mx-auto flex items-start content-start px-5">
          <div className="w-1/2 max-md:w-full max-md:text-center max-md:items-center flex flex-col items-start ">
            <p className="bg-transparent rounded-md border-black border px-3 py-1">
              About
            </p>
            <h2 className="font-semibold mt-5 max-md:text-3xl text-[50px]">
              Promotion on clothes from previous collections that are sold at
              reduced prices
            </h2>
            <h3>Suspendisse consequat sed velit amet commodo commodo</h3>
          </div>
        </div>
        <Image
          src="/images/about-1.webp"
          alt="about"
          fill
          objectFit="cover"
          className="-z-[1]"
        />
      </section>
      <section className="border-b py-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-5 max-md:text-center  md:w-1/2 pb-10">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Promotion on clothes from previous collections
            </h2>
            <p>
              In fusce a pellentesque neque urna consectetur consectetur odio.
              Dignissim congue massa arcu varius sapien integer gravida. Blandit
              amet etiam vel aenean eget.
            </p>
          </div>
          <hr />
          <ul className="flex flex-wrap max-md:gap-3 max-md:justify-center justify-end p-10">
            <li className="flex flex-col items-start lg:w-1/4 md:w-1/3 gap-5 lg:px-10 md:px-5 max-md:text-center max-md:items-center">
              <p className="bg-secondary border-black border-2 rounded-lg px-3 py-1">
                1 200 000
              </p>
              <h2 className="text-xl font-semibold">
                Promotion on clothes from previous
              </h2>
              <p>
                Tortor etiam imperdiet aliquet senectus habitant pellentesque
                maximus neque quis fames egestas eleifend sem
              </p>
            </li>
            <li className="flex flex-col items-start lg:w-1/4 md:w-1/3 gap-5 lg:px-10 md:px-5 max-md:text-center max-md:items-center">
              <p className="bg-secondary border-black border-2 rounded-lg px-3 py-1">
                97
              </p>
              <h2 className="text-xl font-semibold">
                Dui dignissim aliquam scelerisque
              </h2>
              <p>
                Pretium sed diam eleifend volutpat sociosqu faucibus accumsan
                ipsum curabitur ornare imperdiet arcu urna dapibus
              </p>
            </li>
            <li className="flex flex-col items-start lg:w-1/4 md:w-1/3 gap-5 lg:px-10 md:px-5 max-md:text-center max-md:items-center">
              <p className="bg-secondary border-black border-2 rounded-lg px-3 py-1">
                250 000
              </p>
              <h2 className="text-xl font-semibold">
                Nascetur commodo at et parturient fermentum
              </h2>
              <p>
                Consectetur tristique quis platea nisl ridiculus sodales
                torquent lacinia erat sit fusce porta sagittis Integer fringilla
                pretium
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[url('/images/video-bg.svg')] bg-[bottom_center] py-10">
        <div className="container mx-auto px-5">
          <div className="special-title">
            <Image
              src="/images/special-title.svg"
              alt="special title"
              width={48}
              height={16}
            />
            <p>Kids love this stuff</p>
            <h2>Watch our Promo Video</h2>
          </div>
          <div className="relative border-2 border-black rounded-md max-w-[1000px] h-[580px] mx-auto mt-10 flex items-center justify-center">
            <Image
              src="/images/video-thumbnail.webp"
              alt="video"
              className="w-full"
              objectFit="cover"
              fill
            />
            <button className="relative z-10 transition-all hover:bg-[#EBD2CE] bg-main-200 flex justify-center items-center  rounded-full w-[120px] h-[120px]">
              <FaPlay className="fill-white" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-5">
          <div className="special-title">
            <Image
              src="/images/special-title.svg"
              alt="special title"
              width={48}
              height={16}
            />
            <p>We love making kids smile</p>
            <h2>Our Team Members</h2>
          </div>
          <div className="flex max-md:flex-col gap-5 my-20 justify-center">
            <div className="relative group rounded-md shadow-2xl">
              <Image
                src="/images/member-1.webp"
                alt="team member"
                width={400}
                height={570}
                className="rounded-md w-full"
              />
              <div className="absolute bottom-0 w-full gap-2 flex flex-col items-center justify-center py-10 transition-all group-hover:bg-[#f6dcb899]">
                <h2 className="bg-[#2E3331] text-[#ffffffb3] font-semibold px-3 py-1 rounded-sm">
                  Sales manager
                </h2>
                <h3 className="text-2xl font-semibold">Joanna Haze</h3>
              </div>
            </div>
            <div className="relative group rounded-md shadow-2xl md:-translate-y-10">
              <Image
                src="/images/member-2.webp"
                alt="team member"
                width={400}
                height={570}
                className="rounded-md w-full"
              />
              <div className="absolute bottom-0 w-full gap-2 flex flex-col items-center justify-center py-10 transition-all group-hover:bg-[#f6dcb899]">
                <h2 className="bg-[#2E3331] text-[#ffffffb3] font-semibold px-3 py-1 rounded-sm">
                  CEO
                </h2>
                <h3 className="text-2xl font-semibold">Veronika Loop</h3>
              </div>
            </div>
            <div className="relative group rounded-md shadow-2xl">
              <Image
                src="/images/member-3.webp"
                alt="team member"
                width={400}
                height={570}
                className="rounded-md w-full"
              />
              <div className="absolute bottom-0 w-full gap-2 flex flex-col items-center justify-center py-10 transition-all group-hover:bg-[#f6dcb899]">
                <h2 className="bg-[#2E3331] text-[#ffffffb3] font-semibold px-3 py-1 rounded-sm">
                  Sales manager
                </h2>
                <h3 className="text-2xl font-semibold">Monique Beaulieu</h3>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <h2 className="text-2xl font-semibold">
              Promotion on clothes from previous collections
            </h2>
            <p>Suspendisse consequat sed velit amet commodo commodo</p>
          </div>
          <Link
            href="/contact"
            className="flex items-center w-fit mx-auto gap-5 mt-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
          >
            Contact Us
            <IoIosArrowForward />
          </Link>
        </div>
      </section>
    </main>
  );
}
