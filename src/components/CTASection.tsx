import Button from "./ui/Button";

export default function CTASection() {
  return (
    <section className="section-top-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/cta-bg.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center gap-8 px-4 text-center md:gap-16">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <p className="tracking-1 text-lg text-white/50 md:text-xl lg:text-2xl">
            Light Up Your Next Project
          </p>

          <h2 className="font-bartle tracking-1 text-xl sm:text-2xl leading-tight font-normal text-light md:text-4xl">
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

        <Button variant="primary" size="lg" link={"mailto:info@light.com"}>
          Request a Quote
        </Button>
      </div>
    </section>
  );
}
