import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      if (target && target instanceof Element) {
        setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="custom-cursor"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`,
        opacity: 0.8,
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s',
        backgroundColor: isPointer ? 'white' : 'var(--primary)',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor;
