import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import GenericInput from './GenericInput.component'; // Update the import path as necessary
import { mockLabel } from './GenericInput.mock';

describe('GenericInput Component', () => {
  test('renders with the correct label', () => {
    render(<GenericInput label={mockLabel} onChange={jest.fn()} defaultValue={''} />);

    const label = screen.getByLabelText(mockLabel);

    expect(label).toBeInTheDocument();
  });

  test('should call onChange prop with input value', () => {
    const handleChange = jest.fn();

    render(<GenericInput label={mockLabel} onChange={handleChange} defaultValue={''} />);

    const input = screen.getByLabelText(mockLabel);

    const targetValueParams = { target: { value: 'new value' } };

    fireEvent.change(input, targetValueParams);

    expect(handleChange).toHaveBeenCalledWith('new value');
  });

  test('should have the correct default value', () => {
    render(<GenericInput label={mockLabel} onChange={jest.fn()} defaultValue="default" />);

    const input = screen.getByDisplayValue('default');

    expect(input).toBeInTheDocument();
  });

  test('should use the correct variant filled', () => {
    render(<GenericInput label={mockLabel} onChange={jest.fn()} variant="filled" defaultValue={''} />);

    const inputElement = screen.getByLabelText(mockLabel);

    expect(inputElement).toHaveClass('MuiFilledInput-input');
  });
});
