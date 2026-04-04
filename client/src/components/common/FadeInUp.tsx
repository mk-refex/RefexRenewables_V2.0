import { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  /** Hidden-state vertical offset (e.g. "24px" for a subtler nudge than default 100%). */
  translateHidden?: string;
}

const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '',
  threshold = 0.8,
  translateHidden = '100%',
}: FadeInUpProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Trigger animation when element is visible
        if (!isVisible && rect.top < windowHeight * threshold) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, threshold]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: isVisible ? 'translateY(0)' : `translateY(${translateHidden})`,
        opacity: isVisible ? 1 : 0,
        transition: `transform ${duration}s ease-out ${delay}s, opacity ${duration}s ease-out ${delay}s`,
        transformOrigin: 'bottom',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
