export type AnimationType = 'horizontal' | 'order';

export interface GenericAnimationProps {
  children: JSX.Element | JSX.Element[];
  type?: AnimationType;
  className?: string;
  isAnimationDisabled?: boolean;
}
