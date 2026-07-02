import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
  style = {},
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericTarget = parseInt(target, 10);
    if (isNaN(numericTarget)) {
      // Non-numeric target, just show it
      return;
    }

    const steps = 60;
    const increment = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericTarget));

      if (current >= steps) {
        setCount(numericTarget);
        clearInterval(timer);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const numericTarget = parseInt(target, 10);
  const isNumeric = !isNaN(numericTarget);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{isNumeric ? count : target}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
