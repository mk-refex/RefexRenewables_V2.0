import { useState, useEffect, useRef } from "react";

interface SectionHeadingProps {
  badgeText: string;
  text?: string;
  className?: string;
  watermarkAlign?: "left" | "center";
  showWatermark?: boolean;
  watermarkColor?: "black" | "white";
}

const SectionHeading = ({
  badgeText,
  text,
  className = "",
  watermarkAlign = "left",
  showWatermark = true,
  watermarkColor = "black",
}: SectionHeadingProps) => {
  const [translateX, setTranslateX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate when component is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate scroll progress through the viewport (only if watermark is shown)
          if (showWatermark) {
            const scrollProgress = Math.max(
              0,
              Math.min(
                1,
                (windowHeight - rect.top) / (windowHeight + rect.height),
              ),
            );

            // Map progress to horizontal movement: 0 = right (+25px), 1 = left (-25px)
            const translateXValue = 25 - scrollProgress * 50; // 25 to -25
            setTranslateX(translateXValue);
          }

          // Trigger badge animation when section is visible
          if (!isVisible && rect.top < windowHeight * 0.8) {
            setIsVisible(true);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, showWatermark]);

  return (
    <div
      ref={containerRef}
      className={`mb-6 relative w-full max-w-full ${className}`}
    >
      {/* Watermark Text */}
      {showWatermark && (
        <span
          className="watermark transition-transform duration-300 ease-out"
          style={{
            fontSize: "95px",
            position: "absolute",
            left: watermarkAlign === "center" ? "50%" : "0px",
            top: "-45px",
            textTransform: "uppercase",
            fontFamily: '"Exo", sans-serif',
            fontWeight: 700,
            opacity: 0.06,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            height: "95px",
            display: "flex",
            alignItems: "center",
            WebkitTextStroke:
              watermarkColor === "white" ? "1px #ffffff" : "1px #000000",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform:
              watermarkAlign === "center"
                ? `translate3d(calc(-50% + ${translateX}px), 0px, 0px)`
                : `translate3d(${translateX}px, 0px, 0px)`,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          {badgeText} {text || ""}
        </span>
      )}

      {/* Badge and Text Container */}
      <div
        className={`flex items-center gap-2 relative z-10 ${className.includes("justify-center") ? "justify-center" : ""}`.trim()}
      >
        {/* Badge with background */}
        <span
          ref={badgeRef}
          className="inline-block text-white font-bold relative"
          style={{
            backgroundColor: "#4AAB3D",
            // textTransform: "uppercase",
            fontSize: "30px",
            lineHeight: "30px",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-block",
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            transformOrigin: "bottom",
          }}
        >
          {badgeText}
        </span>

        {/* Text without background - only render if text is provided */}
        {text && (
          <span
            className="font-bold relative"
            style={{
              color: "#4AAB3D",
              // textTransform: "uppercase",
              fontSize: "30px",
              lineHeight: "30px",
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transition:
                "transform 0.6s ease-out 0.1s, opacity 0.6s ease-out 0.1s",
              transformOrigin: "bottom",
            }}
          >
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
