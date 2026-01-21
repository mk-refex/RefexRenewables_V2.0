
import { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20solar%20panel%20installation%20with%20clear%20blue%20sky%20renewable%20energy%20technology%20clean%20and%20professional%20corporate%20sustainability%20green%20energy%20infrastructure&width=1920&height=1080&seq=privacypolicyhero001&orientation=landscape"
          alt="Privacy Policy"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Inter']">
          Privacy Policy
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-['Inter']">
          Your privacy is important to us
        </p>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
