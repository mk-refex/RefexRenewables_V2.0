import { useState, useEffect } from "react";
import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export function GallerySection() {
  const images = [
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery01.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery02.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery03.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery04.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery05.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery06.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery07.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visible: string[] = [];
    for (let i = 0; i < perView; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
        <FadeInUp
          delay={0.1}
          threshold={FADE_THRESHOLD}
          translateHidden="20px"
          duration={0.5}
        >
          <div className="relative px-10 sm:px-12 md:px-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {getVisibleImages().map((image, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`Vyzag Bio-Energy Gallery ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-300 hover:bg-brand hover:text-white sm:left-1 sm:h-12 sm:w-12 md:-translate-x-4"
              aria-label="Previous"
            >
              <i className="ri-arrow-left-s-line text-xl sm:text-2xl"></i>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-300 hover:bg-brand hover:text-white sm:right-1 sm:h-12 sm:w-12 md:translate-x-4"
              aria-label="Next"
            >
              <i className="ri-arrow-right-s-line text-xl sm:text-2xl"></i>
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2 sm:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-brand" : "w-3 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
