import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import RepositorySearchBar from './RepositorySearchBar.component';

import '@testing-library/jest-dom';

const mockSearchTerm = jest.fn();
const mockPush = jest.fn();
const mockSetCurrentPage = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    query: { name: '' },
  }),
}));

jest.mock('../../Repositories.context', () => ({
  useRepositoriesContext: () => ({
    setSearchTerm: mockSearchTerm,
    setCurrentPage: mockSetCurrentPage,
  }),
}));

describe('RepositorySearchBar', () => {
  test('should call setSearchTerm with new value on input change', () => {
    const searchTerm = 'new search term';

    render(<RepositorySearchBar />);

    const paramTarget = { target: { value: searchTerm } };

    const input = screen.getByLabelText('Search Github repository');

    fireEvent.change(input, paramTarget);

    expect(mockSearchTerm).toHaveBeenCalledWith('new search term');
  });

  test('should update the router query on search term change', () => {
    render(<RepositorySearchBar />);

    const searchTerm = 'new search term';

    const input = screen.getByLabelText('Search Github repository');

    fireEvent.change(input, { target: { value: searchTerm } });

    expect(mockSearchTerm).toHaveBeenCalledWith(searchTerm);

    expect(mockPush).toHaveBeenCalled();
  });

  test('should call setSearchTerm and setCurrentPage with new value on input change', () => {
    const searchTerm = 'new search term';

    render(<RepositorySearchBar />);

    const input = screen.getByLabelText('Search Github repository');

    fireEvent.change(input, { target: { value: searchTerm } });

    expect(mockSearchTerm).toHaveBeenCalledWith(searchTerm);

    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });
});
