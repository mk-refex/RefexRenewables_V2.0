export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-banner-1.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideInLeft">
          Spectrum Renewable
        </h1>
      </div>
    </section>
  );
}
