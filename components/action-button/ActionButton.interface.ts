import { ReactNode } from 'react';

export interface ActionButtonProps {
  onClick: () => void;
  children: ReactNode[] | ReactNode;
  className?: string;
}
