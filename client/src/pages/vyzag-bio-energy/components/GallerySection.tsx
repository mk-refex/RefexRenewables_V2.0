import { useState } from 'react';

export function GallerySection() {
  const images = [
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery01.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery02.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery03.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery04.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery05.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery06.jpg',
    'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery07.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleImages().map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={image}
                  alt={`Vyzag Bio-Energy Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Previous"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Next"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
