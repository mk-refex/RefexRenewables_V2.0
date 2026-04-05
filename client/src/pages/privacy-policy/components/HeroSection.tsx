
import { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section className="relative flex h-[280px] items-center justify-center overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[60vh] lg:min-h-[500px]">
      <div className="absolute inset-0">
        <img
          src="/images/aboutBanner.jpg"
          alt="Privacy Policy"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center font-sans sm:px-6 lg:px-8">
        <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl">
          Privacy Policy
        </h1>
        <p className="mx-auto max-w-3xl text-base text-white/90 sm:text-lg md:text-xl lg:text-2xl">
          Your privacy is important to us
        </p>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
