import Button from './Button';

export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-36 overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/46ac965c9887eaeb3e11be0cb8c7a2c50233d096?width=3840')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-12 md:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Title and subtitle wrapper */}
        <div className="flex flex-col items-center gap-12 md:gap-16 max-w-5xl">
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl lg:text-2xl font-normal tracking-wide"
            style={{ color: 'rgba(255, 255, 255, 0.50)' }}
          >
            Light Up Your Next Project
          </p>

          {/* Main heading */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-wide"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif' }}
          >
            <span style={{ color: 'rgba(202, 231, 234, 1)' }}>
              Illuminate your vision<br className="hidden sm:block" />
              {' '}with precision{' '}
            </span>
            <span style={{ color: '#51FF48' }}>
              <br className="hidden sm:block" />
              lighting solutions
            </span>
          </h2>
        </div>

        {/* Button */}
        <Button variant="primary" size="lg">
          Request a Quote
        </Button>
      </div>
    </section>
  );
}
