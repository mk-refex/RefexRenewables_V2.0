const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-green-600 text-white text-sm font-bold tracking-wider uppercase px-4 py-2">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Refex Renewables &<br />Infrastructure Limited (RRIL)
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              is a leading name in solar energy, recognized for pioneering projects and delivering innovative, first-of-their-kind renewable energy systems across India. We are dedicated to accelerating India's clean energy transition by providing affordable, reliable, and scalable solar solutions. From large-scale utility projects to innovative solar offerings, our mission is to lower carbon emissions, enhance energy self-reliance, and support a more sustainable and environmentally responsible future for all.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <i className="ri-sun-line text-4xl text-green-600"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">89</div>
                <div className="text-sm text-gray-600">Sites</div>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <i className="ri-hand-heart-line text-4xl text-green-600"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1 GW</div>
                <div className="text-sm text-gray-600">Projects Across India</div>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <i className="ri-shield-check-line text-4xl text-green-600"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20solar%20energy%20renewable%20power%20plant%20installation%20with%20large%20photovoltaic%20panels%20in%20rows%20under%20bright%20blue%20sky%20showing%20clean%20sustainable%20energy%20infrastructure%20technology%20with%20simple%20industrial%20background%20emphasizing%20green%20energy%20production&width=700&height=500&seq=about-solar-main-001&orientation=landscape"
                alt="Solar Energy Infrastructure"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              
              {/* 20+ Years Experience Card */}
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-green-600">
                <div className="text-4xl font-bold text-gray-900 mb-1">20+</div>
                <div className="text-sm text-gray-600 whitespace-nowrap">Years Experience</div>
              </div>
            </div>

            {/* Decorative Green Bars */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <div className="w-2 h-24 bg-green-600 rounded-full"></div>
              <div className="w-2 h-16 bg-green-600 rounded-full"></div>
              <div className="w-2 h-20 bg-green-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
