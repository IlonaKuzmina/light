"use client";

import Image from "next/image";
import Button from "./ui/Button";

interface WorkItem {
  icon: string;
  title: string;
  description?: string;
}

const workItems: WorkItem[] = [
  {
    icon: "/icons/icon-1.svg",
    title: "Production companies",
  },
  {
    icon: "/icons/icon-2.svg",
    title: "Advertising agencies",
  },
  {
    icon: "/icons/icon-3.svg",
    title: "Independent directors & cinematographers",
  },
  {
    icon: "/icons/icon-4.svg",
    title: "Streaming & social media content teams",
  },
];

export default function WhoWeWork() {
  return (
    <section className="section-top-padding" id="work-with">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 md:gap-14 lg:grid-cols-2 2xl:gap-[72px]">
          <div className="space-y-10 md:space-y-12">
            <h2 className="section-title">
              WHO WE
              <br />
              WORK
              <br />
              WITH
            </h2>
            <p className="text-light text-lg sm:text-2xl md:text-[32px]">
              We support productions of all sizes — from small crews to full-scale cinematic shoots.
            </p>
            <Button variant="primary" size="lg" link="#equipment">
              View Our Gear
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-6 lg:gap-8">
            {workItems.map((item, index) => (
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
