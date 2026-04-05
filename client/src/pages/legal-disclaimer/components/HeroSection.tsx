export default function HeroSection() {
  return (
    <section className="relative flex h-[280px] items-center justify-center overflow-hidden sm:h-[340px] md:h-[400px] lg:h-[60vh] lg:min-h-[400px]">
      <div className="absolute inset-0">
        <img
          src="/images/aboutBanner.jpg"
          alt="Legal Disclaimer"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      </div>

      <div className="relative z-10 px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-6xl">
          Legal Disclaimer
        </h1>
        <div className="mx-auto h-1 w-20 bg-emerald-500 sm:w-24" />
      </div>
    </section>
  );
}
