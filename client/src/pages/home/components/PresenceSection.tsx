import { useState, useEffect } from 'react';

const PresenceSection = () => {
  const [activeState, setActiveState] = useState(0);

  const states = [
    { name: 'Chhattisgarh', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Chhattisgarh-map-new.png', position: { top: '48%', left: '58%' } },
    { name: 'Gujarat', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Gujarat-map.png', position: { top: '42%', left: '28%' } },
    { name: 'Punjab', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/punjab-map.png', position: { top: '18%', left: '35%' } },
    { name: 'Uttar Pradesh', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Uttar-Pradesh-map.png', position: { top: '32%', left: '50%' } },
    { name: 'Maharashtra', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Maharashtra-map.png', position: { top: '58%', left: '38%' } },
    { name: 'Delhi', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/delhi-map.png', position: { top: '26%', left: '42%' } },
    { name: 'Madhya Pradesh', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Madhya-Pradesh-map.png', position: { top: '45%', left: '43%' } },
    { name: 'Rajasthan', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Rajasthan-map.png', position: { top: '35%', left: '33%' } },
    { name: 'Ladakh', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Ladakh-map.png', position: { top: '12%', left: '42%' } },
    { name: 'Haryana', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/haryana-map.png', position: { top: '28%', left: '38%' } },
    { name: 'Karnataka', image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/Karnataka-map.png', position: { top: '68%', left: '40%' } }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % states.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [states.length]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://static.readdy.ai/image/d0ead66ce635a168f1e83b108be94826/94b8453c9c181a7c8764a676e694edc5.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Map with Markers */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/map.png" 
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
                  onMouseEnter={() => setActiveState(index)}
                >
                  {/* Marker with Glow Effect */}
                  <div className="relative">
                    {/* Glow Animation */}
                    <div className="absolute inset-0 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    
                    {/* Marker Icon */}
                    <div className={`relative w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                      activeState === index ? 'scale-125' : ''
                    }`}>
                      <i className="fas fa-map-marker-alt text-green-600 text-2xl drop-shadow-lg"></i>
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
              <span className="inline-block bg-green-600 text-white text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded">
                STATE WISE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Our Presence
            </h2>

            {/* State Card with Auto-Slide */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center gap-8">
                  {/* State Map Image */}
                  <div className="w-40 h-40 flex-shrink-0 transition-all duration-700">
                    <img 
                      src={states[activeState].image} 
                      alt={states[activeState].name} 
                      className="w-full h-full object-contain"
                      key={activeState}
                    />
                  </div>
                  
                  {/* State Name */}
                  <div className="flex-1">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 transition-all duration-700" key={`name-${activeState}`}>
                      {states[activeState].name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Slide Counter */}
              <div className="text-center mt-6">
                <span className="text-sm text-gray-500 font-medium">
                  {activeState + 1} / {states.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
