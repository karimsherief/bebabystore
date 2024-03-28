import Image from "next/image";
import React from "react";
import { CgQuote } from "react-icons/cg";

export default function Testimonial() {
  return (
    <section className="bg-[#EBF2F5] p-10 mt-36">
      <div className="container mx-auto">
        <div className="special-title -translate-y-32 max-w-[600px] mx-auto">
          <Image
            src="/images/special-title.svg"
            alt="special title"
            width={48}
            height={16}
          />
          <p>It suits to your child</p>
          <h2>Impressions of our customers shopping for children!</h2>
        </div>
        <div className="flex max-md:flex-col justify-center gap-5">
          <div className="flex flex-col gap-5">
            <div>
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-xl font-semibold">Amazing collection!</h2>
            <p>
              Et fames vulputate leo condimentum in lacus morbi orci congue
              aliquam feugiat laoreet finibus pede litora torquent quam diam sed
              bibendum mauris interdum faucibus phasellus mattis per tellus nec
              massa letius vivamus
            </p>
            <div className="flex items-center gap-5">
              <Image
                src="/images/avatar-1.webp"
                alt="avatar"
                width={56}
                height={56}
                className="rounded-full"
              />
              <p>
                Amoureth Johnson{" "}
                <span className="text-[#1211277a]"> / CTO, Incognito</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-xl font-semibold">Good Materials</h2>
            <p>
              Euismod litora tempus suspendisse amet morbi ex lobortis arcu
              lectus mi nam auctor faucibus himenaeos quam integer pede si
              nullam venenatis lacus maximus fusce suscipit sem ullamcorper
              laoreet accumsan
            </p>
            <div className="flex items-center gap-5">
              <Image
                src="/images/avatar-3.webp"
                alt="avatar"
                width={56}
                height={56}
                className="rounded-full"
              />
              <p>
                Adeleide Kennington{" "}
                <span className="text-[#1211277a]"> / CEO, RedBook</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <Image
                src="/images/quote.svg"
                alt="quote"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-xl font-semibold">Great Projects</h2>
            <p>
              Felis dictum dictumst senectus ex at vel et dui donec lectus
              suscipit ut quisque taciti hac nunc vitae adipiscing magnis mattis
              risus hendrerit rhoncus pellentesque per velit nam massa posuere
              proin interdum
            </p>
            <div className="flex items-center gap-5">
              <Image
                src="/images/avatar-2.webp"
                alt="avatar"
                width={56}
                height={56}
                className="rounded-full"
              />
              <p>
                Monique Chamberlain{" "}
                <span className="text-[#1211277a]"> / Old, Ghost</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
