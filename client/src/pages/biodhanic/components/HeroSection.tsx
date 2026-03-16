import { useState, useEffect } from "react";

const SLIDER_INTERVAL_MS = 3500;

const SLIDES = [
  {
    type: "image",
    src: "https://m.media-amazon.com/images/I/513AgKPK4QL.jpg",
    alt: "Refex BioDhanic Fermented Organic Manure",
  },
  {
    type: "image",
    src: "https://m.media-amazon.com/images/I/6195bmbK53L._SL1080_.jpg",
    alt: "Refex BioDhanic Fermented Organic Manure",
  },
  {
    type: "image",
    src: "https://m.media-amazon.com/images/I/71bx+MMX7iL._SL1080_.jpg",
    alt: "Refex BioDhanic Fermented Organic Manure",
  },
  {
    type: "benefits",
    lines: [
      "Enhanced NPK",
      "Soil Fertility",
      "Slower Release",
      "Moisture Retention",
    ],
  },
  { type: "tagline", text: "Fermented Organic Manure", sub: "1 kg & 2 kg" },
];

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(/images/mesmerizing-shot-scenic-cloudy-sky-field.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideInLeft">
            The Wealth behind every Bountiful Harvest
          </h1>
          <div
            className="animate-slideInLeft"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="/contact"
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Buy Now card: small auto slider + blinking scale button */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-[160px] sm:w-[200px]">
        <a
          href="https://amzn.in/d/0bLeYybO"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl overflow-hidden bg-white/95 backdrop-blur shadow-xl ring-2 ring-white/50 hover:shadow-2xl hover:ring-[#22c55e]/40 transition-all duration-300 animate-blinkScale"
        >
          <div className="relative aspect-[3/4] bg-gradient-to-b from-emerald-50 to-green-100 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 h-full flex items-center justify-center p-2"
                >
                  {slide.type === "image" &&
                    (!imgError ? (
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-contain"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center">
                        <span className="text-3xl mb-1">🌱</span>
                        <span className="text-xs font-semibold text-green-800">
                          BioDhanic
                        </span>
                      </div>
                    ))}
                  {slide.type === "benefits" && (
                    <ul className="text-[10px] sm:text-xs text-green-800 font-medium space-y-1 text-center">
                      {slide.lines?.map((line, j) => (
                        <li key={j}>• {line}</li>
                      ))}
                    </ul>
                  )}
                  {slide.type === "tagline" && (
                    <div className="text-center px-1">
                      <p className="text-xs sm:text-sm font-semibold text-green-800">
                        {slide.text}
                      </p>
                      <p className="text-[10px] text-green-600 mt-1">
                        {slide.sub}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
              {SLIDES.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === slideIndex ? "bg-[#22c55e]" : "bg-green-300"}`}
                />
              ))}
            </div>
          </div>
          <div className="py-2.5 px-3 bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-center">
            <span className="inline-block text-white font-bold text-sm sm:text-base tracking-wide">
              Buy Now
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
