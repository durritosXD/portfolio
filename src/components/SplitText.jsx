import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({
  children,
  type = 'chars', // 'chars' | 'words'
  animation = 'slideUp', // 'slideUp' | 'fade' | 'rotate' | 'scale'
  stagger = 0.03,
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
  style = {},
  as: Tag = 'span',
}) => {
  const text = typeof children === 'string' ? children : '';

  const units = type === 'chars' ? text.split('') : text.split(' ');

  const animations = {
    slideUp: {
      hidden: { y: '120%', opacity: 0, rotateX: -40 },
      visible: { y: '0%', opacity: 1, rotateX: 0 },
    },
    fade: {
      hidden: { opacity: 0, filter: 'blur(8px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
    rotate: {
      hidden: { opacity: 0, rotateZ: 10, y: 20 },
      visible: { opacity: 1, rotateZ: 0, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: selectedAnimation.hidden,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Tag className={className} style={{ ...style, display: 'inline' }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-50px' }}
        style={{ display: 'inline', perspective: '1000px' }}
        aria-label={text}
      >
        {units.map((unit, i) => (
          <motion.span
            key={i}
            variants={childVariants}
            style={{
              display: 'inline-block',
              whiteSpace: type === 'words' ? 'pre' : 'pre-wrap',
              transformStyle: 'preserve-3d',
            }}
            aria-hidden="true"
          >
            {unit === ' ' ? '\u00A0' : unit}
            {type === 'words' && i < units.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default SplitText;
