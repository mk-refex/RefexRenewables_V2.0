
export default function CTASection() {
  return (
    <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=vibrant%20green%20rice%20paddy%20fields%20with%20young%20crops%20growing%20in%20rows%20showing%20sustainable%20organic%20agriculture%20with%20simple%20clean%20natural%20background%20emphasizing%20environmental%20farming%20practices&width=1920&height=600&seq=biodhanic-cta-001&orientation=landscape)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join the Movement
        </h2>
        <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
          Let's nurture the soil naturally and empower farmers to grow sustainably.<br />
          Together, we can build a greener, more resilient agricultural future with Refex BioDhanic.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
