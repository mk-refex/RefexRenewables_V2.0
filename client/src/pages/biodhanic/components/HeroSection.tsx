import { useState } from "react";
import HeroHeading from "@/components/common/HeroHeading";

const AMAZON_PRODUCT_URL = "https://www.amazon.in/dp/B0GKPN4Z4T";

const PRODUCT_IMAGE = {
  src: "https://m.media-amazon.com/images/I/611hdgSBGtL._SY500_.jpg",
  alt: "Refex BioDhanic Fermented Organic Manure",
};

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative flex h-[400px] flex-col overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/mesmerizing-shot-scenic-cloudy-sky-field.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-4">
        <div className="flex flex-1 items-center justify-center text-center">
          <div className="container mx-auto">
            <HeroHeading
              watermarkText="BIO-Dhanic"
              text="Refex Bio-Dhanic"
              watermarkAlign="center"
              className="text-center"
            />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 pb-6 text-center md:pb-8">
          {/* <p className="text-base font-medium leading-snug text-white/90 md:text-lg lg:text-xl">
            The Wealth behind every Bountiful Harvest
          </p> */}
          <a
            href="/contact"
            className="inline-flex rounded-md bg-[#22c55e] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a]"
          >
            Contact Our Team
          </a>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 z-20 w-[160px] -translate-y-1/2 sm:w-[200px] md:right-10">
        <a
          href={AMAZON_PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block animate-blinkScale overflow-hidden rounded-xl bg-white/95 shadow-xl ring-2 ring-white/50 backdrop-blur transition-all duration-300 hover:shadow-2xl hover:ring-[#22c55e]/40"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-emerald-50 to-green-100">
            <div className="flex h-full items-center justify-center p-2">
              {!imgError ? (
                <img
                  src={PRODUCT_IMAGE.src}
                  alt={PRODUCT_IMAGE.alt}
                  className="h-full w-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center text-center">
                  <span className="mb-1 text-3xl">🌱</span>
                  <span className="text-xs font-semibold text-green-800">
                    BioDhanic
                  </span>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
          <div className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-3 py-2.5 text-center">
            <span className="inline-block text-sm font-bold tracking-wide text-white sm:text-base">
              Buy Now
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
