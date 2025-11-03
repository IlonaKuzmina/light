import Button from './Button';

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '700px',
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/9a4f6da29bccd573d8be425b3a1c9e2643f89347?width=3840') lightgray 50% / cover no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center gap-8 sm:gap-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-wide text-center"
            style={{
              fontFamily: 'var(--font-bartle)',
              color: '#CAE7EA',
              letterSpacing: '0.5px'
            }}
          >
            Powering<br />
            Productions,<br />
            Frame by Frame
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl font-normal max-w-3xl"
            style={{ color: '#CAE7EA' }}
          >
            Everything you need to bring your vision to life
          </p>
        </div>

        <Button variant="primary" size="lg">
          Request a Quote
        </Button>
      </div>
    </section>
  );
}
