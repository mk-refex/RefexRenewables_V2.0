const BusinessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://static.readdy.ai/image/d0ead66ce635a168f1e83b108be94826/33b8d94f94adb3857885e3267a1b144d.png)' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
              <span className="text-white">OUR</span> BUSINESS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Empowering Tomorrow with Sustainable Renewable Infrastructure for All
          </h2>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Solar Energy Card */}
          <div className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <img 
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/bhilai-home.jpg" 
                alt="Solar Energy" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-green-600 rounded-full shadow-lg">
                <i className="ri-sun-line text-white text-2xl"></i>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Solar Energy</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                As a leading solar power company, we empower commercial and industrial (C&I) enterprises to reduce their carbon footprint through customized commercial solar system solutions
              </p>
              <a 
                href="/solar-energy" 
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Read More
                <i className="ri-arrow-right-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Compressed Bio-Gas Card */}
          <div className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <img 
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/08/bio-gas-bg.jpg" 
                alt="Compressed Bio-Gas" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-green-600 rounded-full shadow-lg">
                <i className="ri-leaf-line text-white text-2xl"></i>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Compressed Bio-Gas</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Under our CBG business unit, we are driving the transition to a circular economy through advanced waste-to-biogas solutions.
              </p>
              <a 
                href="/compressed-bio-gas" 
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Read More
                <i className="ri-arrow-right-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
