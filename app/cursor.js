"use client";

import { useState, useEffect } from 'react';
import { theme } from './page.js';

const CustomCursor = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

        setPath((prevPath) => [
          ...prevPath.slice(-30),  // Keep only the last (n) points so it doesn't crash your computer
          { x: clientX, y: clientY },
        ]);
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    // 
    <div
      className="fixed pointer-events-none"
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999, // Render on top of every other element
      }}
    >
      <svg
        className="absolute"
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >


        {/* Render each line segment between points with varying opacity */}
        {path.map((point, index) => {
          if (index === 0) return null; // Skip the first point
          const prevPoint = path[index - 1];
          const opacity = (index / path.length).toFixed(2); // Calculate opacity (older points are more transparent)
          const color = "#f34040"; // this can be changed to any color
          

          return (
            <line
              key={index}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              stroke={color}
              strokeWidth="2"
              strokeOpacity={opacity} // Set opacity based on the index
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CustomCursor;
