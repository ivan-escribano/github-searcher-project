import React from 'react';

import { ActionButtonProps } from './ActionButton.interface';
import styles from './ActionButton.module.scss';

const ActionButton = ({ children, onClick, className }: ActionButtonProps) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button onClick={handleOnClick} className={`${styles.button} ${className || ''}`} data-cy={'button-action'}>
      {children}
    </button>
  );
};

export default ActionButton;
