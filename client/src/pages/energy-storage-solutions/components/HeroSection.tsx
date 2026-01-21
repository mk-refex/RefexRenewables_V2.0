export default function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center bg-gradient-to-r from-black/70 to-black/50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solutions-img.png)',
          zIndex: -1
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slideInLeft">
            Powering Sustainability,<br />Ensuring Stability
          </h1>
        </div>
      </div>
    </section>
  );
}
