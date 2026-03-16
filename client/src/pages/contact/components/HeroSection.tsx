import HeroHeading from "@/components/common/HeroHeading";

export default function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/contact-us-bnner.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <HeroHeading watermarkText="Contact" text="Contact us" watermarkAlign="center" className="text-center" />
      </div>
    </section>
  );
}
