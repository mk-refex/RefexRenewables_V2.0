import HeroHeading from "@/components/common/HeroHeading";

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vizag-banner.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-white">
        <HeroHeading watermarkText="Bio-Energy" text="Vyzag Bio-Energy" watermarkAlign="center" className="text-center" />
      </div>
    </section>
  );
}
