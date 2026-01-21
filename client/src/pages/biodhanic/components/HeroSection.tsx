
export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=lush%20green%20agricultural%20farmland%20with%20golden%20wheat%20crops%20under%20bright%20sunlight%20showing%20bountiful%20harvest%20with%20simple%20clean%20background%20emphasizing%20natural%20organic%20farming%20and%20sustainable%20agriculture%20practices&width=1920&height=500&seq=biodhanic-hero-001&orientation=landscape)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideInLeft">
            The Wealth behind every Bountiful Harvest
          </h1>
          <p className="text-xl text-white/95 mb-8 max-w-2xl animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            An innovative organic manure that enhances fertility, improves yield, and promotes co-farming
          </p>
          <div className="animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
            <a 
              href="/contact" 
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
