import { Link } from "react-router-dom";
import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export default function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 sm:py-24 lg:py-32"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-bg-scaled.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
        <FadeInUp
          delay={0}
          threshold={FADE_THRESHOLD}
          className="flex flex-col items-center"
        >
          <h2 className="mb-4 mt-2 text-2xl font-bold text-white sm:mb-6 sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">
            Contact Information
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
          <div className="mx-auto mb-6 max-w-4xl space-y-1.5 text-base leading-relaxed text-white/95 sm:mb-8 sm:space-y-2 sm:text-lg lg:text-xl">
            <p className="font-semibold text-white">
              Refex CBG Kolhapur Private Limited
            </p>
            <p>Site Address: Gat.No.1165, Warananagar, AP-Kodoli</p>
            <p>Panhala -Taluka, Kolhapur Dist</p>
            <p>PIN – 416113, Maharashtra.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block cursor-pointer whitespace-nowrap rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:px-10 sm:py-4 sm:text-base"
          >
            Contact Us
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
