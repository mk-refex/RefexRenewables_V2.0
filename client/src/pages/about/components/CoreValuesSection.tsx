const CoreValuesSection = () => {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'PRINCIPLED EXCELLENCE',
      description: 'We believe in the highest standards of ethics, integrity, and professionalism in all our business dealings.',
      bgColor: 'bg-amber-900',
      number: '01'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'SUSTAINABILITY',
      description: 'We are committed to sustainable business practices that balance economic growth with environmental protection and social development.',
      bgColor: 'bg-orange-500',
      number: '02'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'CUSTOMER VALUE CREATION',
      description: 'We strive to deliver superior value to our customers through innovative solutions and exceptional service.',
      bgColor: 'bg-blue-900',
      number: '03'
    },
    {
      icon: 'ri-team-line',
      title: 'SYSTEMS CULTURE',
      description: 'We believe in building robust systems and processes that ensure consistency, quality, and efficiency in our operations.',
      bgColor: 'bg-red-600',
      number: '04'
    }
  ];

  return (
    <section id="core-values" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values guide our actions and decisions, shaping our culture and defining who we are as an organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className={`${value.bgColor} text-white p-8 rounded-lg relative overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer`}>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <i className={`${value.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed mb-6">
                  {value.description}
                </p>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{value.number}</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
