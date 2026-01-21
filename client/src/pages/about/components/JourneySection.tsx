import { useState } from 'react';

const JourneySection = () => {
  const [activeYear, setActiveYear] = useState(1);

  const journeyData = [
    {
      year: '2007',
      title: 'Foundation',
      description: 'Refex Group was established with a vision to contribute to India\'s energy sector through sustainable and innovative solutions.'
    },
    {
      year: '2011',
      title: 'India\'s first 18.7 MW',
      description: 'ground-mounted solar power plant, setting a benchmark in utility-scale solar installation'
    },
    {
      year: '2017',
      title: 'Independent Power Producer (IPP)',
      description: 'Entered the Renewable Independent Power Producer (IPP) segment, marking a strategic shift to owning and operating clean energy assets nationwide.'
    },
    {
      year: '2020',
      title: 'First Solar Power Plant',
      description: 'Commenced operations with the first solar power plant, marking the beginning of our journey in renewable energy generation.'
    },
    {
      year: '2022',
      title: '1 GW Solar Capacity',
      description: 'Achieved 1 GW solar capacity milestone and established presence across 12 states in India, strengthening our national footprint.'
    }
  ];

  return (
    <section id="our-journey" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our journey</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Half Circle Timeline */}
          <div className="relative flex items-center justify-center mb-24">
            <div className="relative w-full max-w-[900px] h-[320px]">
              {/* SVG Half Circle Path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 320" preserveAspectRatio="xMidYMid meet">
                {/* Background arc */}
                <path
                  d="M 100 280 A 350 350 0 0 1 800 280"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                {/* Active segment - green line */}
                <path
                  d="M 100 280 A 350 350 0 0 1 800 280"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="3"
                  strokeDasharray="1100"
                  strokeDashoffset={1100 - (activeYear * (1100 / (journeyData.length - 1)))}
                  className="transition-all duration-700 ease-in-out"
                  strokeLinecap="round"
                />
              </svg>

              {/* Year Dots on the arc */}
              {journeyData.map((item, index) => {
                // Calculate position on half circle (180 degrees)
                const totalDots = journeyData.length;
                const angleStep = 180 / (totalDots - 1);
                const angle = (180 - (index * angleStep)) * (Math.PI / 180);
                const radius = 350;
                const centerX = 450;
                const centerY = 280;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY - radius * Math.sin(angle);

                return (
                  <div
                    key={index}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveYear(index)}
                  >
                    {/* Dot with connecting line */}
                    <div className="relative flex flex-col items-center">
                      {/* Year Label above dot */}
                      <div
                        className={`mb-2 whitespace-nowrap text-lg font-medium transition-all duration-300 ${
                          activeYear === index ? 'text-gray-800' : 'text-gray-500'
                        }`}
                      >
                        {item.year}
                      </div>
                      
                      {/* Vertical line from year to dot */}
                      <div 
                        className={`w-0.5 mb-2 transition-all duration-300 ${
                          activeYear === index ? 'bg-green-600 h-12' : 'bg-gray-300 h-8'
                        }`}
                      ></div>
                      
                      {/* Dot */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                          activeYear === index
                            ? 'bg-green-600 scale-150 shadow-lg'
                            : 'bg-gray-400 hover:bg-green-500 hover:scale-125'
                        }`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Below */}
          <div className="text-center max-w-3xl mx-auto mt-20">
            <div className="mb-8">
              <h3 className="text-8xl font-bold text-green-600 mb-8" style={{ fontSize: '120px', lineHeight: '1' }}>
                {journeyData[activeYear].year}
              </h3>
              <h4 className="text-xl text-gray-700 mb-4 leading-relaxed">
                Commissioned <span className="text-green-600 font-semibold">{journeyData[activeYear].title}</span>
              </h4>
              <p className="text-gray-600 leading-relaxed text-base">
                {journeyData[activeYear].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
