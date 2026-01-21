
export default function WhyUseSection() {
  const reasons = [
    {
      icon: 'ri-seedling-line',
      title: 'Enhances Soil Fertility',
      description: 'Replenishes organic carbon and nutrients'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Boosts Crop Yield',
      description: 'Supports healthy plant growth and root development'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Improves Soil Health',
      description: 'Encourages microbial balance and moisture retention'
    },
    {
      icon: 'ri-test-tube-line',
      title: 'Reduces Chemical Dependence',
      description: 'Lowers fertilizer usage, saving costs for farmers'
    },
    {
      icon: 'ri-earth-line',
      title: 'Supports Circular Economy',
      description: 'Utilizes organic waste from CBG plants efficiently'
    }
  ];

  return (
    <section className="py-20 bg-[#1a4d2e]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[600px] bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=farmers%20working%20together%20in%20green%20agricultural%20field%20with%20organic%20crops%20showing%20teamwork%20and%20sustainable%20farming%20practices%20with%20simple%20natural%20background%20emphasizing%20community%20agriculture&width=600&height=600&seq=biodhanic-why-001&orientation=squarish)' }}>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Why use BioDhanic
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 border-2 border-white/20">
                    <i className={`${reason.icon} text-xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
