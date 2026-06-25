import HeroHeading from "@/components/common/HeroHeading";

export default function HeroSection() {
  return (
    <section className="relative flex h-[280px] items-center overflow-hidden sm:h-[340px] lg:h-[400px]">
      <div className="absolute inset-0">
        <img
          src="/wp-content/uploads/2025/10/contact-us-bnner.jpg"
          alt="Contact Us"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroHeading
          watermarkText="Contact"
          text="Contact us"
          watermarkAlign="center"
          className="text-center"
        />
      </div>
    </section>
  );
}
