import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useRouteLoaderDismiss } from "@/router/RouteTransitionShell";

/** Safety net if the video never fires (network, codec, etc.) */
const VIDEO_READY_MAX_WAIT_MS = 8000;

const HeroSection = () => {
  const dismissRouteLoader = useRouteLoaderDismiss();
  const loaderReleased = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const releaseLoader = useCallback(() => {
    if (loaderReleased.current) return;
    loaderReleased.current = true;
    dismissRouteLoader();
  }, [dismissRouteLoader]);

  useLayoutEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // Cached / already-decoded video: don’t wait for another event round-trip
    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      releaseLoader();
    }
  }, [releaseLoader]);

  useEffect(() => {
    const t = window.setTimeout(releaseLoader, VIDEO_READY_MAX_WAIT_MS);
    return () => window.clearTimeout(t);
  }, [releaseLoader]);

  return (
    <section className="relative flex min-h-[calc(100dvh-5.5rem)] w-full flex-col overflow-hidden sm:min-h-[calc(100dvh-6rem)] lg:h-[calc(100vh-100px)] lg:min-h-0">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          onLoadedData={releaseLoader}
          onCanPlay={releaseLoader}
          onError={releaseLoader}
        >
          <source
            src="/wp-content/uploads/2025/08/rril-banner.mov"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content: mt-auto + section flex-col + min-h/fixed h pins copy + CTA to the hero bottom (mobile/tablet); lg height + padding unchanged */}
      <div className="container relative z-10 mx-auto mt-auto px-4 pb-10 sm:px-6 sm:pb-12 md:px-10 lg:px-[110px] lg:pb-16">
        <div className="max-w-7xl">
          <h1 className="text-white mb-8 leading-tight">
            <span
              className="inline-block animate-slideInLeft opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <span className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Lighting the path to{" "}
              </span>
              <span className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Sustainability
              </span>
            </span>
            <br />
            <span
              className="inline-block animate-slideInLeft opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <span className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                with{" "}
              </span>
              <span className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Renewable{" "}
              </span>
              <span className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Energy solutions
              </span>
            </span>
          </h1>

          <div
            className="mt-8 animate-slideInLeft opacity-0 sm:mt-12"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <a
              href="/about-us"
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand-hover hover:shadow-xl sm:px-10 sm:py-4 sm:text-base"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
