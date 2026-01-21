export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/SREPL-img.png" 
              alt="Spectrum Renewable Energy" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          <div>
            <div className="mb-4">
              <span className="text-green-600 font-semibold text-lg">REFEX SPECTRUM RENEWABLE</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Spectrum Renewable Energy Private Limited
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Spectrum Renewable Energy Pvt. Ltd. (SREPL), located at Warananagar, Kolhapur, is engaged in the generation of Compressed Biogas (CBG) and organic manure from press mud and other biodegradable wastes.
              </p>
              <p>
                A subsidiary of Refex Sustainability Solutions Private Limited (SREPL) is a leading bio-energy company committed to providing innovative renewable energy solutions for organic waste management and sustainable agriculture.
              </p>
              <p>
                The company offers comprehensive, end-to-end services, encompassing project management, plant design, construction, operations and maintenance, and technological support. Through these integrated solutions, SREPL efficiently converts organic waste into Bio-CNG and high-quality organic manure/soil conditioners, contributing to enhanced agricultural productivity and environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
