import { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/aboutBanner.jpg"
          alt="Terms of Use"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Inter']">
          Terms of Use
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-['Inter']">
          Rules governing your use of our website and services
        </p>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
