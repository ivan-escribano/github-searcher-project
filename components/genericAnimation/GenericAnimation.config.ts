import { Variants } from 'framer-motion';

export const DEFAULT_ANIMATION: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const HORIZONTAL_ANIMATION: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const ORDER_ANIMATION: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.2,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const ANIMATION_DICTIONARY: Record<string, Variants> = {
  default: DEFAULT_ANIMATION,
  horizontal: HORIZONTAL_ANIMATION,
  order: ORDER_ANIMATION,
};
