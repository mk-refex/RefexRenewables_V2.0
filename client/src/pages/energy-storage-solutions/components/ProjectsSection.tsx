import { useState } from 'react';

export default function ProjectsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const projectImages = [
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solution-gallery01.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solution-gallery02.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/11/energy-solution-gallery03.jpg'
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-green-600 font-semibold text-lg">Featured Projects</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Leh and Ladakh</h2>
          <h5 className="text-xl text-gray-600 mt-2 font-normal">1MW/2MWH solar power plant</h5>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <div 
                key={index}
                className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={image}
                  alt={`Energy Storage Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
