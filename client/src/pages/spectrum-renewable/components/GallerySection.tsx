import { useState } from 'react';

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery01.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery02.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery03.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery04.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery05.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery06.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery07.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery08.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery09.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pilot Digester for R&D of different feedstocks and Organic Farming
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img 
                    src={image} 
                    alt={`Spectrum Gallery ${index + 1}`} 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentIndex === index ? 'bg-green-600 w-8' : 'bg-gray-300'
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
