"use client";

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure it's running on client side
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

        setPath((prevPath) => [
          ...prevPath.slice(-30),  // Keep the last 30 points
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
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }} // Allow drawing outside the normal viewbox
      >
        <path
          d={path.map((point, index) => 
            `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
          ).join(' ')}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
