import React, { ChangeEvent } from 'react';

import { TextField } from '@mui/material';

import { GenericInputProps } from './GenericInput.interface';
import styles from './GenericInput.module.scss';

const GenericInput = ({ label, onChange, defaultValue, variant = 'outlined', className }: GenericInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;

    onChange(inputValue);
  };

  return (
    <TextField
      label={label}
      variant={variant}
      onChange={handleOnChange}
      defaultValue={defaultValue}
      className={`${styles.input} ${className || ''}`}
      placeholder="Ex: resume-wizards , github-searcher-timedi"
    />
  );
};
export default GenericInput;
