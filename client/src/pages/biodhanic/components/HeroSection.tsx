import { useState } from "react";
import HeroHeading from "@/components/common/HeroHeading";

const AMAZON_PRODUCT_URL = "https://www.amazon.in/dp/B0GKPN4Z4T";

const PRODUCT_IMAGE = {
  src: "https://m.media-amazon.com/images/I/611hdgSBGtL._SY500_.jpg",
  alt: "Refex BioDhanic Fermented Organic Manure",
};

type HeroSectionProps = {
  onOpenDistributor?: () => void;
};

export default function HeroSection({ onOpenDistributor }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative flex h-[320px] flex-col overflow-hidden bg-gray-900 sm:h-[360px] lg:h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/mesmerizing-shot-scenic-cloudy-sky-field.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center px-2 text-center sm:px-4">
          <div className="container mx-auto max-w-4xl">
            <HeroHeading
              watermarkText="BIO-Dhanic"
              text="Refex Bio-Dhanic"
              watermarkAlign="center"
              className="text-center"
            />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-2 pb-5 text-center sm:gap-3 sm:pb-6 md:pb-8">
          {/* <p className="text-base font-medium leading-snug text-white/90 md:text-lg lg:text-xl">
            The Wealth behind every Bountiful Harvest
          </p> */}
          <button
            type="button"
            onClick={onOpenDistributor}
            className="inline-flex rounded-md bg-[#22c55e] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a]"
          >
            Contact Our Team
          </button>
        </div>
      </div>

      {/* Mobile: compact FAB-style tile bottom-right so it never covers the title; sm+: centered rail */}
      <div className="absolute right-2 bottom-3 z-20 w-[76px] sm:bottom-auto sm:right-4 sm:top-1/2 sm:w-[160px] sm:-translate-y-1/2 md:right-10 md:w-[200px]">
        <a
          href={AMAZON_PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block animate-blinkScale overflow-hidden rounded-lg bg-white/95 shadow-lg ring-1 ring-black/10 backdrop-blur transition-all duration-300 hover:shadow-xl hover:ring-[#22c55e]/40 sm:rounded-xl sm:shadow-xl sm:ring-2 sm:ring-white/50 sm:hover:shadow-2xl"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-emerald-50 to-green-100">
            <div className="flex h-full items-center justify-center p-1 sm:p-2">
              {!imgError ? (
                <img
                  src={PRODUCT_IMAGE.src}
                  alt={PRODUCT_IMAGE.alt}
                  className="h-full w-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <span className="mb-0.5 text-lg sm:mb-1 sm:text-3xl">🌱</span>
                  <span className="text-[9px] font-semibold leading-tight text-green-800 sm:text-xs">
                    BioDhanic
                  </span>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
          <div className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-1.5 py-1 text-center sm:px-3 sm:py-2.5">
            <span className="inline-block text-[10px] font-bold leading-none tracking-wide text-white sm:text-base">
              Buy Now
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
