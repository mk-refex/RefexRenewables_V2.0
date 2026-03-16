import HeroHeading from "@/components/common/HeroHeading";

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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <HeroHeading watermarkText="Solar Energy" text="Solar Energy" watermarkAlign="center" className="text-center" />
      </div>
    </section>
  );
}
