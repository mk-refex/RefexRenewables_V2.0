export default function InitiativesSection() {
  const initiatives = [
    {
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/bio-dhanic-cover.png',
      title: 'Refex BioDhanic',
      number: '01',
      link: '/biodhanic'
    },
    {
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/spectrum-cover.png',
      title: 'Refex Spectrum Renewable',
      number: '02',
      link: '/spectrum-renewable'
    },
    {
      image: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/vizag-cover.png',
      title: 'Refex Vyzag Bio-Energy',
      number: '03',
      link: '/vyzag-bio-energy'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
            Refex <span className="text-gray-800">BIO-ENERGY INITIATIVES</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Driving a Sustainable Future through Renewable Innovation
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <a 
              key={index} 
              href={initiative.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 w-full">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{initiative.number}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">{initiative.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
