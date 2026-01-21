
export default function LaunchSection() {
  const galleryImages = [
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/biodhanicgallery01.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/biodhanicgallery02.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/biodhanicgallery03.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/biodhanicgallery04.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/biodhanicgallery05.jpg'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Launch of<br />Refex BioDhanic
            </h2>
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refex BioDhanic was proudly launched in Kolhapur, Maharashtra, by Mr. Sandeep Tambe, Technical Officer (Fertilizers), Commissionerate of Agriculture, Pune and Mr. Vishal Manjarekar (District In-Charge, Kolhapur) - Rashtriya Chemicals and Fertilizers.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <img 
                src={image}
                alt={`BioDhanic Launch Event ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
