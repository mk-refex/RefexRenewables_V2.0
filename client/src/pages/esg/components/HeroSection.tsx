import HeroHeading from "@/components/common/HeroHeading";

export function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/esg-banner.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      <div className="relative z-10 container mx-auto px-4">
        <HeroHeading watermarkText="ESG" text="ESG" watermarkAlign="center" className="text-center" />
      </div>
    </section>
  );
}
