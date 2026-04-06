import HeroHeading from "@/components/common/HeroHeading";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[300px] w-full items-center overflow-hidden bg-cover bg-center sm:min-h-[400px] lg:min-h-[500px]"
      style={{
        backgroundImage:
          "url(/uploads/wp-content/uploads/2025/10/Picture3.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroHeading watermarkText="Renewables" text="Spectrum Renewables" watermarkAlign="center" className="text-center" />
      </div>
    </section>
  );
}
