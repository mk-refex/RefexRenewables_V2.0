import HeroHeading from "@/components/common/HeroHeading";

const HeroSection = () => {
  return (
    <section className="relative flex h-[300px] items-center justify-center overflow-hidden lg:h-[400px]">
      <div className="absolute inset-0">
        <img
          src="/wp-content/uploads/2025/10/about-us-bg-scaled-new.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <HeroHeading
          watermarkText="About Us"
          text="About Us"
          watermarkAlign="center"
          className="text-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
