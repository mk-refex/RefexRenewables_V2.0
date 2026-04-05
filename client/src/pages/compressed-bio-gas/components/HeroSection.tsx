import HeroHeading from "@/components/common/HeroHeading";

export default function HeroSection() {
  return (
    <section
      className="relative flex h-[280px] items-center overflow-hidden bg-cover bg-center sm:h-[340px] lg:h-[400px]"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/compressed-biogas-banner.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroHeading
          watermarkText="Biogas"
          text="Driving a Sustainable Future through Renewable Innovation"
          watermarkAlign="center"
          className="text-center"
        />
      </div>
    </section>
  );
}
