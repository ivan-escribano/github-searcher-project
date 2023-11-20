import { format, parseISO } from 'date-fns';

export const formatDateCard = (dateISO: string, dateFormat: string = 'MMM dd, yyyy') => {
  const date = parseISO(dateISO);
  return format(date, dateFormat);
};
