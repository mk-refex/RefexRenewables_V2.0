import FadeInUp from "../../../components/common/FadeInUp";

export default function CTASection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/wp-content/uploads/2025/10/bio-dhanic-banner-scaled.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <FadeInUp delay={0} className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
            Join the Movement
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className="text-xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed">
            Let's nurture the soil naturally and empower farmers to grow
            sustainably.
            <br />
            Together, we can build a greener, more resilient agricultural future
            with Refex Bio-Dhanic.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
