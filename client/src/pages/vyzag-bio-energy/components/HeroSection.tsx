import HeroHeading from "@/components/common/HeroHeading";

export function HeroSection() {
  return (
    <section className="relative flex h-[42vh] min-h-[280px] w-full items-center overflow-hidden sm:h-[50vh] sm:min-h-[380px] lg:h-[60vh] lg:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/wp-content/uploads/2025/10/Vizag-banner.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-white sm:px-6 lg:px-8">
        <HeroHeading
          watermarkText="Bio-Energy"
          text="Vyzag Bio-Energy"
          watermarkAlign="center"
          className="text-center"
        />
      </div>
    </section>
  );
}
