import HeroHeading from "@/components/common/HeroHeading";

export default function HeroSection() {
  return (
    <section className="relative flex h-[400px] items-center overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/wp-content/uploads/2025/11/energy-solutions-banner.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
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
