import Button from "./ui/Button";

export default function CTASection() {
  return (
    <section className="section-top-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container flex flex-col items-center justify-center gap-8 px-4 text-center md:gap-16">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <p className="tracking-1 text-lg text-white/50 md:text-xl lg:text-2xl">
            Light Up Your Next Project
          </p>

          <h2 className="font-bartle tracking-1 text-light text-xl leading-tight font-normal sm:text-2xl md:text-4xl">
            <span>
              Illuminate your vision
              <br className="hidden sm:block" /> with precision{" "}
            </span>
            <span className="text-primary">
              <br className="hidden sm:block" />
              lighting solutions
            </span>
          </h2>
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
