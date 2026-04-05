import FadeInUp from '@/components/common/FadeInUp';
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";
import { useState, useEffect } from 'react';

const PresenceSection = () => {
  const [activeState, setActiveState] = useState(0);

  const states = [
    { name: 'Chhattisgarh', image: '/wp-content/uploads/2025/09/Chhattisgarh-map-new.png', position: { top: '50%', left: '48%' } },
    { name: 'Gujarat', image: '/wp-content/uploads/2025/09/Gujarat-map.png', position: { top: '45%', left: '15%' } },
    { name: 'Punjab', image: '/wp-content/uploads/2025/09/punjab-map.png', position: { top: '21%', left: '28%' } },
    { name: 'Uttar Pradesh', image: '/wp-content/uploads/2025/09/Uttar-Pradesh-map.png', position: { top: '34%', left: '44%' } },
    { name: 'Maharashtra', image: '/wp-content/uploads/2025/09/Maharashtra-map.png', position: { top: '57%', left: '26%' } },
    { name: 'Delhi', image: '/wp-content/uploads/2025/09/delhi-map.png', position: { top: '27%', left: '33%' } },
    { name: 'Madhya Pradesh', image: '/wp-content/uploads/2025/09/Madhya-Pradesh-map.png', position: { top: '45%', left: '36%' } },
    { name: 'Rajasthan', image: '/wp-content/uploads/2025/09/Rajasthan-map.png', position: { top: '35%', left: '22%' } },
    { name: 'Jammu and Kashmir', image: '/wp-content/uploads/2025/09/Ladakh-map.png', position: { top: '10%', left: '35%' } },
    { name: 'Haryana', image: '/wp-content/uploads/2025/09/haryana-map.png', position: { top: '26%', left: '30%' } },
    { name: 'Karnataka', image: '/wp-content/uploads/2025/09/Karnataka-map.png', position: { top: '73%', left: '26%' } }
  ];

  // Auto-slide effect - continuously update active state
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % states.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [states.length]);

  const handleStateChange = (index: number) => {
    setActiveState(index);
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://static.readdy.ai/image/d0ead66ce635a168f1e83b108be94826/94b8453c9c181a7c8764a676e694edc5.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Map with Markers */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/wp-content/uploads/2025/09/map.png" 
                alt="India Map" 
                className="w-full h-auto"
              />
              
              {/* Animated Markers */}
              {states.map((state, index) => (
                <div
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{
                    top: state.position.top,
                    left: state.position.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => handleStateChange(index)}
                >
                  {/* Marker with Glow Effect */}
                  <div className="relative">
                    {/* Glow Animation */}
                    <div 
                      className="absolute inset-0 w-5 h-5 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: '#4AAB3D' }}
                    ></div>
                    
                    {/* Marker Icon with Background */}
                    <div className={`relative w-5 h-5 flex items-center justify-center transition-all duration-300 ${
                      activeState === index ? 'scale-125' : ''
                    }`}>
                      {/* Circular Background */}
                      <div 
                        className="absolute rounded-full"
                        style={{ 
                          backgroundColor: '#4AAB3D',
                          width: '25px',
                          height: '25px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                      {/* Marker Icon */}
                      <i className="fas fa-map-marker-alt text-white text-lg drop-shadow-lg relative z-10"></i>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                        {state.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-6">
              <SectionHeading badgeText="STATE" text="WISE" showWatermark={false}/>
            </div>
            <FadeInUp delay={0.2}>
            <h2
              className={`${sectionMainHeadingClassName} mb-12 text-gray-900`}
            >
              Our Presence
            </h2>
            </FadeInUp>

            {/* State Card with Continuous Slide */}
            <div className="relative h-[220px] overflow-hidden sm:h-[260px] lg:h-[280px]">
              <div 
                className="flex"
                style={{
                  width: `${states.length * 100}%`,
                  transform: `translateX(-${(activeState * 100) / states.length}%)`,
                  transition: 'transform 0.8s ease-in-out',
                }}
              >
                {states.map((state, index) => (
                  <div
                    key={index}
                    className="flex flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
                    style={{ 
                      width: `calc(100% / ${states.length})`,
                      minWidth: `calc(100% / ${states.length})`,
                      height: '100%',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                      {/* State Map Image */}
                      <div className="h-28 w-28 shrink-0 sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                        <img 
                          src={state.image} 
                          alt={state.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* State Name */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                          {state.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Counter */}
            {/* <div className="text-center mt-6">
              <span className="text-sm text-gray-500 font-medium">
                {activeState + 1} / {states.length}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
