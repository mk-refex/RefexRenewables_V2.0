export default function HeroSection() {
  return (
    <section
      className="relative h-[400px] flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/compressed-biogas-banner.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slideInLeft">
          Compressed Biogas
        </h1>
        <p
          className="text-xl text-white/90 animate-slideInLeft"
          style={{ animationDelay: "0.2s" }}
        >
          Biogas
        </p>
      </div>
    </section>
  );
}
