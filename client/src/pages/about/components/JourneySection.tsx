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
    <>
      <style>{`
        @keyframes growLine {
          from {
            transform: translateX(-50%) scaleY(0);
          }
          to {
            transform: translateX(-50%) scaleY(1);
          }
        }
        .line-grow-animation {
          animation: growLine 0.7s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .content-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
      <section id="our-journey" className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our journey</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Half Circle Timeline with Content Inside */}
            <div className="relative flex items-center justify-center min-h-[500px] overflow-hidden">
              <div className="relative w-full max-w-[800px] h-[450px]">
                {/* SVG Half Circle Path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
                  {/* Background arc */}
                  <path
                    d="M 80 400 A 320 320 0 0 1 720 400"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                </svg>

              {/* Year Dots on the arc - rotated so active is at top */}
              {journeyData.map((item, index) => {
                // Calculate position so clicked year moves to top (90 degrees)
                const totalDots = journeyData.length;
                const angleStep = 180 / (totalDots - 1);
                
                // Calculate how many positions away from active year
                let offset = index - activeYear;
                
                // The active year should be at position 2 (middle, which is top of arc)
                // Position 0 = 180° (left), Position 2 = 90° (top), Position 4 = 0° (right)
                const targetPosition = 2 + offset;
                
                // Calculate angle for this position (180° to 0°, left to right)
                const angle = (180 - (targetPosition * angleStep)) * (Math.PI / 180);
                const radius = 320;
                const centerX = 400;
                const centerY = 400;
                
                // Position ON the arc line
                const x = centerX + radius * Math.cos(angle);
                const y = centerY - radius * Math.sin(angle);
                
                // Position for year label (outside the arc, further from center)
                const labelOffset = 35; // Distance from arc
                const labelX = centerX + (radius + labelOffset) * Math.cos(angle);
                const labelY = centerY - (radius + labelOffset) * Math.sin(angle);

                const isActive = activeYear === index;

                return (
                  <div key={index}>
                    {/* Dot on the arc */}
                    <div
                      className="absolute cursor-pointer transition-all duration-700 ease-in-out z-10"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => setActiveYear(index)}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-green-600 scale-150 shadow-lg'
                            : 'bg-gray-400 hover:bg-gray-600 hover:scale-125'
                        }`}
                      ></div>
                    </div>
                    
                    {/* Year Label outside the arc */}
                    <div
                      className="absolute cursor-pointer transition-all duration-700 ease-in-out"
                      style={{
                        left: `${labelX}px`,
                        top: `${labelY}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => setActiveYear(index)}
                    >
                      <div
                        className={`whitespace-nowrap text-base font-semibold transition-all duration-300 ${
                          isActive ? 'text-green-600 scale-110' : 'text-gray-600'
                        }`}
                      >
                        {item.year}
                      </div>
                    </div>
                  </div>
                );
              })}

                {/* Vertical Line from Active Year to Content - Animates from dot */}
                <div 
                  key={activeYear}
                  className="absolute w-0.5 bg-green-600 line-grow-animation"
                  style={{
                    left: '50%',
                    top: '80px',
                    height: '100px',
                    transformOrigin: 'top center'
                  }}
                ></div>

              {/* Content INSIDE Circle - Absolutely Positioned and Centered */}
              <div className="absolute left-1/2 top-[220px] transform -translate-x-1/2 text-center max-w-xl w-full px-4">
                <div key={activeYear} className="content-fade-in">
                  <h3 className="text-6xl lg:text-7xl font-bold text-green-600 mb-3" style={{ lineHeight: '1' }}>
                    {journeyData[activeYear].year}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    Commissioned <span className="text-green-600 font-semibold">{journeyData[activeYear].title}</span> {journeyData[activeYear].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JourneySection;
