const OverviewSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <img 
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2023/07/refex-logo-seperate.svg"
                alt="Refex Logo"
                className="h-12 lg:h-14 mb-6"
              />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Refex Renewables &<br />Infrastructure Limited
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-base">
                Refex Renewables and Infrastructure Limited (RRIL) is an Independent Power Producer (IPP) with diversified operations across renewable energy, generation and infrastructure sectors. RRIL commenced its operations in 2011, backed by a team of professionals well versed in the development of utility scale renewable energy assets and a proven track record at an accelerated pace. RRIL currently has operational renewable energy (~1 GW) and thermal (~550 MW) assets across India.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-base">
              RRIL has established a reputation as one of India's leaders in renewable energy space with a commitment towards safe, accountable and sustainable business practices. We strive to continuously improve & deploy cutting-edge technology for providing clean energy solutions to our customers.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              RRIL's renewable energy portfolio consists of utility scale ground mounted solar power plants and rooftop solar installations. Our Compressed Bio Gas (CBG) business further supports transition to clean energy with an environmentally friendly solution for waste management and power generation, supporting the Government of India's SATAT (Sustainable Alternative Towards Affordable Transportation) scheme to promote CBG.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              RRIL is promoted by Mr. Anil Jain and other associates, who bring with them rich experience and understanding of the renewable energy ecosystem. Their vision and leadership has fostered robust growth for the company, helping realise our purpose of providing clean, reliable & affordable energy solutions to our customers. Through our operations, we continue to contribute meaningfully towards India's commitment to building a clean energy future.
            </p>
          </div>
        </div>

        {/* Stats Cards - Full Width Below */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1a5d3a] text-white p-6 lg:p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-building-line text-4xl lg:text-5xl"></i>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-center mb-2">89</div>
            <div className="text-sm font-medium text-center uppercase tracking-wide">Sites</div>
          </div>
          <div className="bg-[#1a5d3a] text-white p-6 lg:p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-sun-line text-4xl lg:text-5xl"></i>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-center mb-2">1 GW</div>
            <div className="text-sm font-medium text-center uppercase tracking-wide">Solar</div>
          </div>
          <div className="bg-[#1a5d3a] text-white p-6 lg:p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-map-pin-line text-4xl lg:text-5xl"></i>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-center mb-2">12</div>
            <div className="text-sm font-medium text-center uppercase tracking-wide">States</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
