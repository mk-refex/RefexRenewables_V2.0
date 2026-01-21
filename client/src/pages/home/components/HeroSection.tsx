const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 100px)' }}>
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/08/rril-banner.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-5xl">
          <h1 className="text-white mb-8 leading-tight">
            <span className="inline-block animate-slideInLeft opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Lighting the path to </span>
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Sustainability</span>
            </span>
            <br />
            <span className="inline-block animate-slideInLeft opacity-0" style={{ animationDelay: '0.10s', animationFillMode: 'forwards' }}>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">with </span>
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Renewable </span>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Energy solutions</span>
            </span>
          </h1>

          <div className="mt-12 animate-slideInLeft opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 text-white px-10 py-4 rounded-md text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: 'rgb(132, 193, 76)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(112, 173, 56)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(132, 193, 76)'}
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
