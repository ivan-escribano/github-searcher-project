import { TextFieldVariants } from '@mui/material';

export interface GenericInputProps {
  label: string;
  defaultValue: string;
  onChange: (value: string) => void;
  variant?: TextFieldVariants;
  className?: string;
}
