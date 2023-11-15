import React from 'react';

import { ActionButtonProps } from './ActionButton.interface';
import styles from './ActionButton.module.scss';

const ActionButton = ({ children, onClick }: ActionButtonProps) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button onClick={handleOnClick} className={styles.button}>
      {children}
    </button>
  );
};

export default ActionButton;
