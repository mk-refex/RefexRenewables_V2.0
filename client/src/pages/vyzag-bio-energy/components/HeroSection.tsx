export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery01.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideInLeft">
          Vyzag Bio-Energy
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
          Leading the Conversion of Municipal Waste into Sustainable Energy
        </p>
      </div>
    </section>
  );
}
