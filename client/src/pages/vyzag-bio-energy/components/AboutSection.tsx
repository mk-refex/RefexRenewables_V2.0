export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/vizag-img.png"
              alt="Vyzag Bio-Energy Facility"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div>
            <div className="mb-6">
              <span className="text-green-600 font-semibold text-lg">REFEX VYZAG BIO</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Vyzag Bio-Energy Fuel Private Limited
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In 2024, RRIL successfully acquired Vyzag Bio-Energy Fuel Private Limited ("Vyzag Bio"), marking a strategic step towards its expansion into the Compressed Biogas (CBG) sector. Vyzag Bio operates a state-of-the-art CBG facility that converts segregated municipal organic waste into biogas, aligning with RRIL's vision of advancing sustainable and renewable energy solutions.
              </p>
              <p>
                Located strategically at the Kapuluppada Dump Yard in Visakhapatnam, the facility employs the Anaerobic Methanation Process to convert organic wet waste into CBG. The plant has an input processing capacity of 30 TPD, utilizing Organic Fractions of Municipal Solid Waste (OF-MSW) and Press Mud as primary feedstock materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
