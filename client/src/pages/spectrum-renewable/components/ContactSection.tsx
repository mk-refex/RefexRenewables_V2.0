import { Link } from "react-router-dom";
import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export default function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{
        backgroundImage:
          "url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-bg-scaled.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <FadeInUp
          delay={0}
          threshold={FADE_THRESHOLD}
          className="flex flex-col items-center"
        >
          <h2 className="mb-6 mt-3 text-4xl font-bold text-white md:text-5xl">
            Contact Information
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
          <div className="mx-auto mb-8 max-w-4xl space-y-2 text-xl leading-relaxed text-white/95">
            <p className="font-semibold text-white">
              Refex Spectrum Renewable Energy Private Limited
            </p>
            <p>Gat.No.1165, Warananagar, AP-Kodoli</p>
            <p>Panhala -Taluka, Kolhapur Dist</p>
            <p>PIN – 416113, Maharashtra.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block cursor-pointer whitespace-nowrap rounded-lg bg-brand px-10 py-4 font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Contact Us
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
