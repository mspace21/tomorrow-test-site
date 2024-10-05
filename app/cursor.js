"use client";

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    // This code runs only in the browser after the component has mounted
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPath((prevPath) => [...prevPath, { x: clientX, y: clientY }]);
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
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }} // Allow drawing outside the normal viewbox
      >
        <path
          d={path.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
