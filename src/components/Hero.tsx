import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden md:min-h-[700px]">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:gap-12 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="font-bartle text-light tracking-1 text-center text-xl leading-7 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Powering
            <br />
            Productions,
            <br />
            Frame by Frame
          </h1>
          <p className="text-light text-lg font-normal sm:text-xl md:text-2xl">
            Everything you need to bring your vision to life
          </p>
        </div>

        <Button
          variant="primary"
          size="lg"
          link="mailto:contact@lightshiftproductions.com"
        >
          Request a Quote
        </Button>
      </div>
    </section>
  );
}
