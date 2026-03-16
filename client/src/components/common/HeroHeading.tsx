import { useState, useEffect, useRef } from 'react';

interface HeroHeadingProps {
  watermarkText: string;
  text: string;
  className?: string;
  watermarkAlign?: 'left' | 'center';
  showWatermark?: boolean;
}

const HeroHeading = ({ watermarkText, text, className = '', watermarkAlign = 'center', showWatermark = true }: HeroHeadingProps) => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && showWatermark) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when component is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate scroll progress through the viewport
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
          
          // Map progress to horizontal movement: 0 = right (+25px), 1 = left (-25px)
          const translateXValue = 25 - (scrollProgress * 50); // 25 to -25
          setTranslateX(translateXValue);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showWatermark]);

  return (
    <div ref={containerRef} className={`relative w-full max-w-full ${className}`}>
      {/* Watermark Text - White Filled */}
      {showWatermark && (
        <span 
          className="watermark transition-transform duration-300 ease-out"
          style={{
            fontSize: '150px',
            position: 'absolute',
            left: watermarkAlign === 'center' ? '50%' : '0px',
            top: '50%',
            textTransform: 'uppercase',
            fontFamily: '"Exo", sans-serif',
            fontWeight: 700,
            opacity: 0.1,
            color: '#ffffff',
            height: '95px',
            display: 'flex',
            alignItems: 'center',
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: watermarkAlign === 'center' 
              ? `translate3d(calc(-50% + ${translateX}px), -50%, 0px)`
              : `translate3d(${translateX}px, -50%, 0px)`,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          {watermarkText}
        </span>
      )}
      
      {/* Main Heading Text */}
      <h1 className="text-4xl lg:text-5xl font-bold text-white relative z-10">
        {text}
      </h1>
    </div>
  );
};

export default HeroHeading;
