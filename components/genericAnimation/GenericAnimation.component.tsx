import React from 'react';

import { motion } from 'framer-motion';

import { ANIMATION_DICTIONARY } from './GenericAnimation.config';
import { GenericAnimationProps } from './GenericAnimation.interface';

const GenericAnimation = ({ children, type, className }: GenericAnimationProps) => {
  return (
    <motion.div
      initial={'initial'}
      whileInView={'animate'}
      viewport={{ once: true }}
      variants={ANIMATION_DICTIONARY[type as string] || ANIMATION_DICTIONARY['default']}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default GenericAnimation;
