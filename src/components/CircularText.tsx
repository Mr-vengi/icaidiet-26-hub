import React, { useState } from "react";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  className?: string;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const characters = Array.from(text);
  const totalChars = characters.length;
  const radius = 62; // px radius

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-36 h-36 flex items-center justify-center select-none cursor-pointer ${className}`}
      style={{
        animation: `spin-slow ${isHovered ? spinDuration / 3 : spinDuration}s linear infinite`,
      }}
    >
      <div className="absolute inset-0 rounded-full border border-slate-300/60 pointer-events-none" />
      <div className="relative w-full h-full">
        {characters.map((char, index) => {
          const angle = (360 / totalChars) * index;
          return (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 font-bold font-gambetta text-[11px] uppercase tracking-wider text-slate-800"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`,
                transformOrigin: "0 0",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
        ✦
      </div>
    </div>
  );
};
