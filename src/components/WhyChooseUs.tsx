"use client";

import Button from "./ui/Button";
import Image from "next/image";

interface ReasonsItem {
  icon: string;
  title: string;
  description?: string;
}

const reasonsItems: ReasonsItem[] = [
  {
    icon: "/icons/icon-5.svg",
    title: "Top-tier professional gear",
  },
  {
    icon: "/icons/icon-6.svg",
    title: "Meticulous quality control",
  },
  {
    icon: "/icons/icon-7.svg",
    title: "Flexible rental terms",
  },
  {
    icon: "/icons/icon-8.svg",
    title: "Reliable support and expert advice",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-top-padding" id="why-us">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 md:gap-14 lg:grid-cols-2 2xl:gap-[72px]">
          <div className="space-y-10 md:space-y-12">
            <h2 className="section-title">
              WHY
              <br />
              Choose Us
            </h2>
            <p className="text-light text-lg sm:text-2xl md:text-[32px]">
              We`re passionate about storytelling through technology — and
              committed to helping you capture every frame perfectly
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2  md:gap-6 lg:gap-8">
            {reasonsItems.map((item, index) => (
              <div key={index} className="bg-card rounded-[20px] p-6 md:p-8 lg:p-12">
                <div className="mb-6 size-12 sm:mb-12 md:size-16">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={64}
                    height={64}
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="text-light tracking-1 text-base font-bold sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
