const AwardsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
              <span className="text-white">AWARDS</span> & ACCOLADES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
            Excellence celebrated through awards and accolades for quality and innovation
          </h2>
        </div>

        {/* Awards - Centered Content */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl">
            {/* Award 1 */}
            <div className="text-center flex-1">
              <div className="mb-6">
                <img 
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/08/Solar-award-768x578-1.png" 
                  alt="Solar Energy Award" 
                  className="w-full h-64 object-contain mx-auto"
                />
              </div>
              <p className="text-white text-base leading-relaxed">
                Solar Energy Company of the Year 2023 by MSMECCII
              </p>
            </div>

            {/* Award 2 */}
            <div className="text-center flex-1">
              <div className="mb-6">
                <img 
                  src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/08/Refex_Group_IN_English_2025_Certification_Badge-scaled.png" 
                  alt="Great Place to Work" 
                  className="w-full h-64 object-contain mx-auto"
                />
              </div>
              <p className="text-white text-base leading-relaxed">
                Great Place to Work Certified India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
