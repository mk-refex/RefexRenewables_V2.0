import { useState, useEffect } from "react";
import FadeInUp from "@/components/common/FadeInUp";
import { sectionMainHeadingClassName } from "@/components/common/SectionHeading";
import UseOfPilotDigestor from "./UseOfPilotDigestor";

const FADE_THRESHOLD = 0.98;

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  const images = [
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery01.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery02.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery03.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery04.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery05.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery06.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery07.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery08.jpg",
    "https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Spectrum-gallery09.jpg",
  ];

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, images.length - perView);
  const pageCount = maxIndex + 1;

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  const trackWidthPercent = (images.length / perView) * 100;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-[110px]">
        {/* <FadeInUp
          delay={0}
          threshold={FADE_THRESHOLD}
          className="mb-12"
        >
          <h2 className={`${sectionMainHeadingClassName} text-gray-900`}>
            Pilot Digestor — R&amp;D &amp; Organic Farming
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.15} threshold={FADE_THRESHOLD}>
          <div className="mb-8 space-y-4 leading-relaxed text-gray-700">
            <p>
              RSREPL operates a pilot digester at its plant to evaluate the
              performance of different feedstocks and optimise biogas yields
              under controlled conditions. This facility supports ongoing
              research on process efficiency and feedstock suitability and is
              planned to be replicated across upcoming units. In parallel,
              RSREPL is engaging with farmers to promote the cultivation of
              Napier grass as a reliable, high-yield feedstock to support
              full-capacity plant operations.
            </p>
          </div>
        </FadeInUp>

        <UseOfPilotDigestor /> */}

        <FadeInUp delay={0.1} threshold={FADE_THRESHOLD}>
          <div className="relative">
            <div className="w-full overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${trackWidthPercent}%`,
                  transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${100 / images.length}%` }}
                  >
                    <img
                      src={image}
                      alt={`Spectrum Gallery ${index + 1}`}
                      className="h-[280px] w-full object-cover sm:h-[360px] md:h-[500px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white md:left-4"
              aria-label="Previous slide"
            >
              <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white md:right-4"
              aria-label="Next slide"
            >
              <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-3 cursor-pointer rounded-full transition-all ${
                    currentIndex === index ? "w-8 bg-brand" : "w-3 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
