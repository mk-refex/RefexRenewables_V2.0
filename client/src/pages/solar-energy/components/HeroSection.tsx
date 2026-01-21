export default function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center bg-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/solar-energy-bg-new01.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white animate-slideInLeft">
          Solar Energy
        </h1>
      </div>
    </section>
  );
}
