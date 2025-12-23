"use client";

import { useEffect, useRef } from "react";

export function GlobeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use CSS animation for better performance (GPU-accelerated)
    container.style.animation = "globe-rotate 40s linear infinite";
    container.style.willChange = "transform";

    return () => {
      if (container) {
        container.style.animation = "";
        container.style.willChange = "auto";
      }
    };
  }, []);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] hidden lg:block opacity-80 pointer-events-none">
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      >
        {/* Globe base */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
        
        {/* Latitude lines - Static, no animation */}
        {[0, 30, 60, 90, 120, 150, 180].map((lat, i) => (
          <div
            key={`lat-${i}`}
            className="absolute left-1/2 -translate-x-1/2 rounded-full border border-primary/20"
            style={{
              width: `${100 - Math.abs(lat - 90) * 2}%`,
              height: `${100 - Math.abs(lat - 90) * 2}%`,
              top: `${(lat / 180) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        
        {/* Longitude lines - Static, no animation */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`long-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20"></div>
          </div>
        ))}
        
        {/* Interconnected nodes - Reduced count and simplified animation */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 360) / 10;
          const radius = 40;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <div
              key={`node-${i}`}
              className="absolute w-2.5 h-2.5 bg-primary rounded-full globe-node-pulse"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%) translateZ(0)",
                boxShadow: "0 0 15px rgba(45, 226, 156, 0.5)",
                animationDelay: `${i * 0.15}s`,
                willChange: "opacity, transform",
              }}
            />
          );
        })}
        
        {/* Connection lines - Static SVG, no animation */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle1 = (i * 360) / 6;
          const angle2 = ((i + 2) * 360) / 6;
          const radius = 40;
          const x1 = 50 + radius * Math.cos((angle1 * Math.PI) / 180);
          const y1 = 50 + radius * Math.sin((angle1 * Math.PI) / 180);
          const x2 = 50 + radius * Math.cos((angle2 * Math.PI) / 180);
          const y2 = 50 + radius * Math.sin((angle2 * Math.PI) / 180);
          
          return (
            <svg
              key={`line-${i}`}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 1, pointerEvents: "none" }}
            >
              <line
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(45, 226, 156, 0.25)"
                strokeWidth="1"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
}

