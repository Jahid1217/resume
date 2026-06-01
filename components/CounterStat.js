"use client";

import { useEffect, useRef, useState } from "react";

export default function CounterStat({ value, suffix, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let frame = 0;
      const totalFrames = 48;
      const tick = () => {
        frame += 1;
        setCount(Math.round((value * frame) / totalFrames));
        if (frame < totalFrames) requestAnimationFrame(tick);
      };
      tick();
      observer.disconnect();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-card" ref={ref}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
