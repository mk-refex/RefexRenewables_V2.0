import { Link } from "react-router-dom";
import FadeInUp from "@/components/common/FadeInUp";

export function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 sm:py-24 lg:py-32"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery04.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
        <FadeInUp delay={0} className="flex flex-col items-center">
          <h2 className="mb-4 mt-2 text-2xl font-bold text-white sm:mb-6 sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">
            Contact Information
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className="mx-auto mb-6 max-w-4xl px-1 text-base leading-relaxed text-white/95 sm:mb-8 sm:text-lg lg:text-xl">
            <span className="mb-2 block font-semibold text-white">
              Vyzag Bio Energy Fuel Private Limited.
            </span>
            Survey No. 410/P, Kapuluppada Dumping Yard,
            <br />
            Visakhapatnam District,
            <br />
            Andhra Pradesh – 531163
          </p>
          <Link
            to="/contact"
            className="inline-block cursor-pointer whitespace-nowrap rounded-lg bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#16a34a] sm:px-10 sm:py-4 sm:text-base"
          >
            Contact Us
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
