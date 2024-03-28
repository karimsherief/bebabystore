import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { RiLinkM } from "react-icons/ri";

export default function TopRated() {
  return (
    <section className="px-5">
      <div className="container mx-auto">
        <div className="special-title">
          <Image
            src="/images/special-title.svg"
            alt="special title"
            width={48}
            height={16}
          />
          <p>Summer Vibe</p>
          <h2>Top rated products</h2>
        </div>
        <div className="flex flex-wrap gap-5 justify-center my-5">
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
              <h2 className="text-lg font-semibold">Girl blouse</h2>
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
              <h2 className="text-lg font-semibold">Baby slippers</h2>
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
              <h2 className="text-lg font-semibold">Cardigan longsleeve</h2>
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
              <h2 className="text-lg font-semibold">Sweater</h2>
              <p>$142.00 - $150.00</p>
            </div>
          </Link>
        </div>
        <div className="flex max-md:flex-col justify-center gap-5 mt-32 ">
          <div className="flex  flex-col gap-5 bg-main-200 rounded-lg text-center items-center px-10 pt-20 pb-0 basis-1/2 max-h-[600px]">
            <div className="max-w-[400px]">
              <h2 className="text-4xl font-semibold mb-3">
                <span className="relative z-[1]">
                  Back
                  <span className="absolute z-[-1] left-0 bottom-[20%] w-[calc(100%+0.3em)] h-[15%] -ml-[.15rem] -skew-x-[12deg]  translate-x-0 bg-[#FFBABF]" />
                </span>{" "}
                to School in the Best Style
              </h2>
              <p>Viverra senectus magna nulla blandit ex maximus mi cubilia</p>
            </div>
            <Link
              href="#"
              className="flex items-center mx-auto gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
            >
              Buy Now <IoIosArrowForward />
            </Link>
            <Image
              src="/images/baby-slippers.webp"
              alt="baby slippers"
              width={350}
              height={200}
            />
          </div>
          <div className="flex flex-col overflow-hidden  gap-5 bg-[#D3EBBC] rounded-lg text-center items-center px-10 pt-20 pb-0 basis-1/2 max-h-[600px]">
            <div className="max-w-[400px]">
              <h2 className="text-4xl font-semibold mb-5">
                <span className="relative z-[1]">
                  Eco
                  <span className="absolute z-[-1] left-0 bottom-[20%] w-[calc(100%+0.3em)] h-[15%] -ml-[.15rem] -skew-x-[12deg]  translate-x-0 bg-[#7CB247]" />
                </span>{" "}
                - Style for toddlers
              </h2>
              <p>
                Dapibus aptent pulvinar ullamcorper lacus per tincidunt ad
                pretium
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center mx-auto gap-5 px-8 py-3 border-2 border-black rounded-lg bg-white hover:bg-main-100 transition-all"
            >
              Buy Now <IoIosArrowForward />
            </Link>
            <Image
              src="/images/sleeveless-cardigan.webp"
              alt="Sleeveless Cardigan"
              width={450}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
