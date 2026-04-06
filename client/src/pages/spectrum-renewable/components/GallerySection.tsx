import { useEffect, useState } from "react";
import FadeInUp from "@/components/common/FadeInUp";

const FADE_THRESHOLD = 0.98;

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  const images = [
    "/wp-content/uploads/2025/10/Picture3.jpg",
    "/wp-content/uploads/2025/10/Picture2.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery02.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery03.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery04.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery05.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery06.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery07.jpg",
    "/wp-content/uploads/2025/10/Spectrum-gallery08.jpg",
  ];

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, images.length - perView);
  const pageCount = maxIndex + 1;

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[110px]">
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
            <div className="w-full overflow-hidden">
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
                    className="shrink-0 px-1.5 sm:px-2"
                    style={{ width: `${100 / images.length}%` }}
                  >
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-1 shadow-md transition-transform duration-500 sm:rounded-2xl sm:p-1.5 lg:p-2">
                      <img
                        src={image}
                        alt={`Spectrum Gallery ${index + 1}`}
                        className="h-[180px] w-full rounded-lg object-cover sm:h-[230px] md:h-[280px] lg:h-[320px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white sm:left-2 sm:h-12 sm:w-12 md:left-4"
              aria-label="Previous slide"
            >
              <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white sm:right-2 sm:h-12 sm:w-12 md:right-4"
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
