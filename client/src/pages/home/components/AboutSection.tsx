import { useState, useEffect, useRef } from "react";
import SectionHeading, {
  sectionMainHeadingClassName,
} from "@/components/common/SectionHeading";
import FadeInUp from "@/components/common/FadeInUp";

const aboutStatsIcon = (name: "sites" | "projects" | "location") =>
  `${import.meta.env.BASE_URL}about-stats-icons/${name}.svg`;

const AboutSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate when section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate scroll progress through the section
          // When section top enters viewport (rect.top = windowHeight), progress = 0
          // When section bottom exits viewport (rect.bottom = 0), progress = 1
          const sectionHeight = rect.height;
          const scrollProgress = Math.max(
            0,
            Math.min(
              1,
              (windowHeight - rect.top) / (windowHeight + sectionHeight),
            ),
          );

          // Map progress to horizontal movement: 0 = right (+25px), 1 = left (-25px)
          const translateXValue = 25 - scrollProgress * 50; // 25 to -25
          setTranslateX(translateXValue);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call to set position when section first appears

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <div className="pr-0 lg:pr-[10px]">
            <SectionHeading badgeText="WHO WE ARE" />

            <FadeInUp delay={0.2}>
              <h2
                className={`${sectionMainHeadingClassName} mb-2 text-gray-900`}
              >
                Refex Renewables &<br />
                Infrastructure Limited (RRIL)
              </h2>
            </FadeInUp>

            <p className="mb-8 text-base leading-relaxed text-[#74787C] lg:text-lg">
              is a leading name in solar energy, recognized for pioneering
              projects and delivering innovative, first of their kind renewable
              energy systems across India. We are dedicated to accelerating
              India's clean energy transition by providing affordable, reliable,
              and scalable solar solutions. From large-scale utility projects to
              innovative solar offerings, our mission is to lower carbon
              emissions, enhance energy self-reliance, and support a more
              sustainable and environmentally responsible future for all.
            </p>

            {/* Stats row: even spacing between the three groups */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-0">
              {/* Stat 1 - Sites */}
              <div className="flex shrink-0 items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={aboutStatsIcon("sites")}
                    alt=""
                    width={47}
                    height={47}
                    className="block"
                    decoding="async"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-1 text-brand">
                    <span>89</span>
                  </h3>
                  <p className="text-sm font-medium text-gray-600">Sites</p>
                </div>
              </div>

              {/* Stat 2 - Projects */}
              <div className="flex shrink-0 items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={aboutStatsIcon("projects")}
                    alt=""
                    width={51}
                    height={55}
                    className="block"
                    decoding="async"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-1 text-brand">
                    <span>125 MW</span>
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    Projects Across India
                  </p>
                </div>
              </div>

              {/* Stat 3 - States */}
              <div className="flex shrink-0 items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={aboutStatsIcon("location")}
                    alt=""
                    width={48}
                    height={48}
                    className="block h-12 w-12 object-contain"
                    decoding="async"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-1 text-brand">
                    <span>11</span>
                  </h3>
                  <p className="text-sm font-medium text-gray-600">States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="/wp-content/uploads/2025/10/about-new.png"
                alt="Solar Energy Infrastructure"
                className="w-full h-auto object-cover"
              />

              {/* 20+ Years Experience Card */}
              <div
                className="absolute bottom-4 left-4 rounded-lg border border-brand bg-white px-3 py-2 shadow-xl transition-transform duration-300 ease-out sm:bottom-8 sm:left-6 sm:px-[18px] sm:py-[10px] lg:bottom-[100px]"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="mb-1 text-3xl font-bold text-gray-900 sm:text-4xl">
                  20+
                </div>
                <div className="whitespace-nowrap text-sm text-gray-600 sm:text-[18px]">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
