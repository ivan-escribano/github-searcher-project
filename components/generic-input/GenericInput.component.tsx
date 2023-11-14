import React, { ChangeEvent } from 'react';

import { TextField } from '@mui/material';

import { GenericInputProps } from './GenericInput.interface';
import styles from './GenericInput.module.scss';

const GenericInput = ({ label, value, setValue, defaultValue, variant = 'outlined', className }: GenericInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };

  return (
    <TextField
      label={label}
      variant={variant}
      onChange={handleOnChange}
      value={value}
      defaultValue={defaultValue}
      className={`${styles.input} ${className || ''}`}
      placeholder="Ex: resume-wizards , github-searcher-timedi"
    />
  );
};
export default GenericInput;
