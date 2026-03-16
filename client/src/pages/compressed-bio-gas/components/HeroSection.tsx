import HeroHeading from "@/components/common/HeroHeading";

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
        <HeroHeading watermarkText="Biogas" text="Driving a Sustainable Future through Renewable Innovation" watermarkAlign="center" className="text-center" />
    </section>
  );
}
