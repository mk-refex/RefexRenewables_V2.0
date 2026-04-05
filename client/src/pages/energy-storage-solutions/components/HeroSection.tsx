import HeroHeading from "@/components/common/HeroHeading";

export default function HeroSection() {
  return (
    <section className="relative flex h-[280px] items-center overflow-hidden bg-gray-900 sm:h-[340px] lg:h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/wp-content/uploads/2025/11/energy-solutions-banner.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <HeroHeading
          watermarkText="ESS"
          text="Energy Storage Solutions"
          watermarkAlign="center"
          className="text-center"
        />
      </div>
    </section>
  );
}
