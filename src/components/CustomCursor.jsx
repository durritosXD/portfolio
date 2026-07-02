import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const trailPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window) {
      setIsHidden(true);
      return;
    }

    const handleMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };

      const target = e.target;
      if (target && target instanceof Element) {
        const computed = window.getComputedStyle(target);
        setIsPointer(
          computed.cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')
        );
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Smooth animation loop for the trail
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${position.current.x}px`;
        cursorRef.current.style.top = `${position.current.y}px`;
      }

      // Lerp for trail (follows with delay)
      trailPosition.current.x += (position.current.x - trailPosition.current.x) * 0.15;
      trailPosition.current.y += (position.current.y - trailPosition.current.y) * 0.15;

      if (trailRef.current) {
        trailRef.current.style.left = `${trailPosition.current.x}px`;
        trailRef.current.style.top = `${trailPosition.current.y}px`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isHidden && !cursorRef.current) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          width: isPointer ? '50px' : '12px',
          height: isPointer ? '50px' : '12px',
          background: isPointer ? 'transparent' : 'var(--primary)',
          border: isPointer ? '2px solid var(--primary)' : 'none',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1), height 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, border 0.3s, opacity 0.3s',
          opacity: isHidden ? 0 : 0.9,
        }}
      />

      {/* Trail ring */}
      <div
        ref={trailRef}
        style={{
          width: '36px',
          height: '36px',
          border: '1px solid rgba(129, 236, 255, 0.3)',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s, width 0.4s cubic-bezier(0.22, 1, 0.36, 1), height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          opacity: isHidden ? 0 : isPointer ? 0 : 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
