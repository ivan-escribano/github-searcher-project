import { Dispatch } from 'react';

import { TextFieldVariants } from '@mui/material';

export interface GenericInputProps {
  label: string;
  defaultValue: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  variant?: TextFieldVariants;
  className?: string;
}
