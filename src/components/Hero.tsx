import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden text-center py-20"
    >
      <div
        className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{ left: mousePos.x - 144, top: mousePos.y - 144 }}
      />
      <h1 className="relative text-5xl font-bold">Micah Stamper</h1>
      <p className="relative text-2xl mt-4">Technologist</p>
    </section>
  );
};

export default Hero;