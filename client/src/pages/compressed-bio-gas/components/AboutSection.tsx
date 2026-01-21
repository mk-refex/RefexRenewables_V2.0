export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/09/biogas-image.png" 
              alt="Compressed Biogas" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <div className="mb-6">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                ABOUT <span className="text-gray-800">Compressed BioGas</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                Pioneering Sustainable Solutions with Compressed Biogas
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Under our CBG business unit, we are driving the transition to a circular economy through advanced waste-to-biogas solutions. By converting multiple organic waste streams—including press mud and municipal solid waste (MSW)—we produce Compressed Biogas (CBG), a clean and renewable biofuel, along with fermented organic manure that supports sustainable agriculture.
              </p>
              <p>
                Our biogas plants not only reduce landfill pressure and greenhouse gas emissions but also transform unutilized waste into dual-value outputs: green energy and organic soil enhancers. These organic waste-to-energy solutions enable cleaner cities, greener farms, and a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
