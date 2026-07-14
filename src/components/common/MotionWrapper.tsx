'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animation?: 'fade' | 'fade-up' | 'scale' | 'none';
}

export default function MotionWrapper({
  children,
  animation = 'fade',
  ...props
}: MotionWrapperProps) {
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
    },
    'fade-up': {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.3 },
    },
    none: {},
  };

  const selectedAnimation = animation !== 'none' ? animations[animation] : {};

  return (
    <motion.div {...selectedAnimation} {...props}>
      {children}
    </motion.div>
  );
}
