import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <span
      className={`inline-block font-bold tracking-tight text-slate-900 ${className}`}
    >
      {text}
    </span>
  );
};
