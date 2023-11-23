import { fireEvent, render, screen } from '@testing-library/react';

import GenericPagination from './GenericPagination.component';

describe('GenericPagination Component', () => {
  test('should render the correct number of pages', () => {
    render(<GenericPagination numberPages={5} onChange={() => {}} />);

    const pagination = screen.getByRole('navigation');

    expect(pagination).toHaveTextContent('1');
    expect(pagination).toHaveTextContent('5');
  });

  test('should call onChange with correct page number on page change', () => {
    const handleChange = jest.fn();

    render(<GenericPagination numberPages={10} onChange={handleChange} />);

    const targetPage = screen.getByLabelText('Go to page 2');

    fireEvent.click(targetPage);

    expect(handleChange).toHaveBeenCalledWith(2);
  });

  test('should handle numberPages prop correctly and not contain number page that is not in the range specified', () => {
    render(<GenericPagination numberPages={3} onChange={() => {}} />);

    const pagination = screen.getByRole('navigation');

    expect(pagination).toHaveTextContent('1');
    expect(pagination).toHaveTextContent('3');
    expect(pagination).not.toHaveTextContent('4');
  });
});
