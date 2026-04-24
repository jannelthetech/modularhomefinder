// DESIGN: Carbon Blueprint — animated counter for statistics
import { useEffect, useRef, useState, useCallback } from "react";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract only the numeric portion
    const numericStr = value.replace(/[^0-9.]/g, "");
    const numericValue = parseFloat(numericStr);
    if (isNaN(numericValue) || numericValue <= 0) {
      setDisplayValue(numericStr || value);
      return;
    }

    const isDecimal = numericStr.includes(".");
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.max(0, eased * numericValue);

      if (progress < 1) {
        if (isDecimal) {
          setDisplayValue(current.toFixed(1));
        } else {
          setDisplayValue(Math.round(current).toString());
        }
        requestAnimationFrame(animate);
      } else {
        // Final value — use the original numeric string
        setDisplayValue(numericStr);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}
