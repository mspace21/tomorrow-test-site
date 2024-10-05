"use client";

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Update the path with new cursor position, limit the array to last 50 points
      setPath((prevPath) => [
        ...prevPath.slice(-49), // Keep only the last 50 points for performance and fading
        { x: clientX, y: clientY },
      ]);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        {/* Render each line segment between points with varying opacity */}
        {path.map((point, index) => {
          if (index === 0) return null; // Skip the first point since we need pairs of points to draw a line
          const prevPoint = path[index - 1];
          const opacity = (index / path.length).toFixed(2); // Calculate opacity (older points are more transparent)

          return (
            <line
              key={index}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              stroke="currentColor"
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
