import FadeInUp from '@/components/common/FadeInUp';
import SectionHeading from '@/components/common/SectionHeading';
import { useRef } from 'react';

const StrengthsSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const strengths = [
    {
      icon: 'ri-star-line',
      title: 'End-to-End Project Expertise',
      description: 'From feasibility to commissioning and lifecycle management, we bring full-stack capability in renewable energy and infrastructure projects.',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/strength02-new.jpg'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Engineering Excellence at Scale',
      description: 'Our team of solar engineers and energy experts deliver high-performance systems with precision and scalability—across commercial, industrial, and utility-scale projects.',
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/strength04-new.jpg'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Robust O&M and Lifecycle Support',
      description: "Our solar responsibility doesn’t end at commissioning. With predictive maintenance, uptime guarantees, and regular audits, we ensure long-term asset performance.",
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/strength03-new01.jpg',
    }
    ];

  return (
    <section className="py-16 lg:py-24 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionHeading badgeText="OUR" text="STRENGTHS" className="justify-center" watermarkAlign="center" />
          <FadeInUp delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Strong Foundations built on Innovation, Sustainability and Reliability
          </h2>
          </FadeInUp>
        </div>

        {/* Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {strengths.map((strength, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-96 cursor-pointer"
            >
              {/* Default Background - Gray */}
              <div className="absolute inset-0 bg-[#FFFFFF]"></div>

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
