'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  initialDelay?: number;
  animateOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  initialDelay = 0, 
  animateOnce = false 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: animateOnce });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: hasAnimated && !animateOnce ? Math.min(initialDelay, 0.2) : initialDelay
        }
      });
      setHasAnimated(true);
    } else if (!animateOnce) {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.4 }
      });
    }
  }, [isInView, controls, initialDelay, hasAnimated, animateOnce]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
