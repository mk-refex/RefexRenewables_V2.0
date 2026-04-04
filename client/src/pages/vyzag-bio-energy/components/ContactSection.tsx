import { Link } from "react-router-dom";
import FadeInUp from "@/components/common/FadeInUp";

export function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery04.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <FadeInUp delay={0} className="flex flex-col items-center">
          <h2 className="mb-6 mt-3 text-4xl font-bold text-white md:text-5xl">
            Contact Information
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-white/95">
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
            className="inline-block cursor-pointer whitespace-nowrap rounded-lg bg-[#22c55e] px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#16a34a]"
          >
            Contact Us
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
