import { useRef } from 'react';

const StrengthsSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const strengths = [
    {
      icon: 'ri-star-line',
      title: 'End-to-End Project Expertise',
      description: 'From feasibility to commissioning and lifecycle management, we bring full-stack capability in renewable energy systems',
      image: 'https://readdy.ai/api/search-image?query=professional%20renewable%20energy%20engineers%20working%20on%20solar%20panel%20installation%20project%20with%20technical%20equipment%20blueprints%20and%20modern%20industrial%20facility%20showing%20end%20to%20end%20project%20management%20expertise%20with%20clean%20simple%20background&width=600&height=400&seq=strength-expertise-001&orientation=landscape'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Engineering Excellence at Scale',
      description: 'Our team of solar engineers and energy experts deliver precision-engineered solutions backed by decades of combined experience',
      image: 'https://readdy.ai/api/search-image?query=large%20scale%20solar%20energy%20engineering%20facility%20with%20rows%20of%20photovoltaic%20panels%20and%20technical%20infrastructure%20showing%20precision%20engineering%20excellence%20and%20industrial%20scale%20renewable%20energy%20systems%20with%20clean%20simple%20background&width=600&height=400&seq=strength-engineering-002&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Proven Track Record',
      description: 'With 89 operational sites across 12 states and 1 GW of installed capacity, our results speak for themselves',
      image: 'https://readdy.ai/api/search-image?query=successful%20completed%20solar%20power%20plant%20installation%20with%20multiple%20operational%20sites%20showing%20proven%20track%20record%20of%20renewable%20energy%20projects%20across%20different%20locations%20with%20clean%20simple%20background&width=600&height=400&seq=strength-track-003&orientation=landscape'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4">
            <span className="inline-block bg-green-600 text-white text-sm font-bold tracking-wider uppercase px-4 py-2">
              OUR STRENGTHS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Strong Foundations built on Innovation, Sustainability and Reliability
          </h2>
        </div>

        {/* Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-96 cursor-pointer"
            >
              {/* Default Background - Gray */}
              <div className="absolute inset-0 bg-gray-100"></div>

              {/* Background Image - Hidden by default, reveals on hover from bottom to top */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <img
                  src={strength.image}
                  alt={strength.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              
              {/* Icon Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-lg z-10">
                <i className={`${strength.icon} text-emerald-600 text-2xl`}></i>
              </div>

              {/* Content - Always visible, positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {strength.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
