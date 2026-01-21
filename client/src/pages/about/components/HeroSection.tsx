const HeroSection = () => {
  return (
    <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/about-us-bg-scaled-new.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">About Us</h1>
      </div>
    </section>
  );
};

export default HeroSection;
