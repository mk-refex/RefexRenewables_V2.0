const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/mission-img01.jpg"
                alt="Vision - Forest from above"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Vision
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As the first Indian wind company committed to net-carbon neutral
                operations, we are dedicated to accelerating the global
                transition to renewable energy through innovation and
                sustainable practices.
              </p>
              <p>
                To lead India's clean energy revolution, making sustainable
                power accessible to all while fostering economic growth and
                environmental stewardship.
              </p>
              <p>
                We envision a future where renewable energy is the backbone of
                India's energy infrastructure, empowering communities and
                driving progress towards a carbon-neutral society.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Mission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To develop and operate world-class renewable energy projects
                that deliver reliable, affordable clean power while creating
                value for our stakeholders and communities.
              </p>
              <p>
                We are committed to quality, innovation, and excellence in
                execution. We continuously invest in cutting-edge technology and
                sustainable business models to optimize our operations.
              </p>
              <p>
                Our mission extends beyond energy generation – we aim to be
                catalysts for positive change, contributing to India's economic
                development and environmental goals while maintaining the
                highest standards of corporate governance.
              </p>
            </div>
          </div>

          <div>
            <div className="relative">
              <img
                src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/vision-img.jpg"
                alt="Mission - Business professional with renewable energy vision"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
