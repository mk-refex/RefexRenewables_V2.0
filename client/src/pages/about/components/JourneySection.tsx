import FadeInUp from '@/components/common/FadeInUp';
import type { ReactNode } from 'react';
import { useState } from 'react';

/** Brand green for this section */
const JOURNEY_GREEN = '#4aab3d';
const HL =
  'font-semibold text-sm text-[#4aab3d] sm:text-base';

const JourneySection = () => {
  const [activeYear, setActiveYear] = useState(0);

  const journeyData: { year: string; body: ReactNode }[] = [
    {
      year: '2007',
      body: (
        <>
          Refex entered the solar energy sector in <b className={HL}>2007</b>{' '}
          through a strategic partnership with <b className={HL}>IBC Solar</b>,
          Germany, marking the beginning of our journey in the renewable energy
          domain.
        </>
      ),
    },
    {
      year: '2011',
      body: (
        <>
          Commissioned <b className={HL}>India&apos;s first 18.7 MW</b>{' '}
          ground-mounted solar power plant, setting a benchmark in utility-scale
          solar installation
        </>
      ),
    },
    {
      year: '2017',
      body: (
        <>
          Entered the Renewable{' '}
          <b className={HL}>Independent Power Producer (IPP)</b> segment, marking
          a strategic shift to owning and operating clean energy assets
          nationwide.
        </>
      ),
    },
    {
      year: '2020',
      body: (
        <>
          Recognized as a solar power partner of{' '}
          <b className={HL}>Indian Railways</b>, contributing to their renewable
          energy initiatives.
        </>
      ),
    },
    {
      year: '2022',
      body: (
        <>
          Successfully commissioned a <b className={HL}>high-altitude</b> solar
          installation for the <b className={HL}>Indian Army</b> in Leh-Ladakh,
          inaugurated by the Honourable Defence Minister of India.
        </>
      ),
    },
    {
      year: '2023',
      body: (
        <>
          Commissioned <b className={HL}>India&apos;s largest</b>{' '}
          ground-mounted solar power plant for Indian Railways, with a capacity
          of <b className={HL}>75 MWp</b>.
        </>
      ),
    },
    {
      year: '2024',
      body: (
        <>
          Secured a <b className={HL}>100 MW</b> solar project from{' '}
          <b className={HL}>NTPC</b>, further expanding our renewable energy
          portfolio.
        </>
      ),
    },
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
      <section id="our-journey" className="bg-white py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="text-center mb-5">
          <FadeInUp delay={0.2}>
            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
              Our Journey
            </h2>
          </FadeInUp>
          </div>

          <div className="mx-auto max-w-6xl">
            {/* Mobile & tablet: vertical timeline (no horizontal overflow) */}
            <ol className="list-none space-y-0 lg:hidden" aria-label="Company milestones by year">
              {journeyData.map((item, index) => (
                <li key={item.year} className="flex gap-4">
                  <div className="flex w-5 shrink-0 flex-col items-center pt-1.5">
                    <span
                      className="size-3.5 shrink-0 rounded-full border-2 border-white shadow-sm ring-2 ring-gray-100"
                      style={{ backgroundColor: JOURNEY_GREEN }}
                      aria-hidden
                    />
                    {index < journeyData.length - 1 ? (
                      <span
                        className="my-2 w-0.5 flex-1 min-h-10 bg-gray-200 sm:min-h-12"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <div
                    className={`min-w-0 flex-1 ${index < journeyData.length - 1 ? 'pb-6 sm:pb-8' : ''}`}
                  >
                    <h3
                      className="mb-2 text-xl font-bold sm:text-2xl"
                      style={{ lineHeight: 1.15, color: JOURNEY_GREEN }}
                    >
                      {item.year}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Laptop+: half-circle timeline (unchanged layout) */}
            <div className="relative hidden min-h-[500px] items-center justify-center overflow-x-auto overflow-y-hidden lg:flex">
              <div className="relative h-[450px] w-full max-w-[800px] min-w-0">
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
                
                const offset = index - activeYear;
                // Apex of semicircle: middle index along the arc (not hardcoded — was wrong for 7 items)
                const topSlot = (totalDots - 1) / 2;
                const targetPosition = topSlot + offset;
                
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
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'scale-150 shadow-lg'
                            : 'bg-gray-400 hover:scale-125 hover:bg-gray-600'
                        }`}
                        style={
                          isActive ? { backgroundColor: JOURNEY_GREEN } : undefined
                        }
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
                          isActive ? 'scale-105' : 'text-gray-600'
                        }`}
                        style={isActive ? { color: JOURNEY_GREEN } : undefined}
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
                  className="line-grow-animation absolute w-0.5"
                  style={{
                    left: '50%',
                    top: '80px',
                    height: '100px',
                    transformOrigin: 'top center',
                    backgroundColor: JOURNEY_GREEN,
                  }}
                ></div>

              {/* Content INSIDE Circle - Absolutely Positioned and Centered */}
              <div className="absolute left-1/2 top-[220px] w-full max-w-xl -translate-x-1/2 transform px-4 text-center">
                <div key={activeYear} className="content-fade-in">
                  <h3
                    className="mb-3 text-3xl font-bold lg:text-4xl"
                    style={{ lineHeight: 1.1, color: JOURNEY_GREEN }}
                  >
                    {journeyData[activeYear].year}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    {journeyData[activeYear].body}
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
