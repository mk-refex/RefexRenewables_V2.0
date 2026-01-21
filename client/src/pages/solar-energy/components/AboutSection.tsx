export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/solar-image-new.png"
              alt="Solar Energy Installation"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <div className="mb-6">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                ABOUT Solar Energy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                India's leading solar power energy company
              </h2>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-base">
                As a leading solar power company, we empower commercial and industrial (C&I) enterprises to reduce their carbon footprint through customized commercial solar system solutions. With expert solar panel installation and a proven track record of delivering high-performance solar projects, we help businesses seamlessly integrate clean, reliable solar power into their operations. Recognized among the best solar companies in India, we enable our clients to advance toward their net-zero goals while driving cost savings, boosting sustainability, and ensuring long-term environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}