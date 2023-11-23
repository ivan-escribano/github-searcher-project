import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import RepositorySearchBar from './RepositorySearchBar.component';
import { DEFAULT_GITHUB_REPOSITORY } from './RepositorySearchBar.config';

import '@testing-library/jest-dom';

const mockSearchTerm = jest.fn();

jest.mock('../../Repositories.context', () => ({
  useRepositoriesContext: () => ({
    setSearchTerm: mockSearchTerm,
  }),
}));

describe('RepositorySearchBar', () => {
  test('should render the search bar with default value', () => {
    render(<RepositorySearchBar />);

    const input = screen.getByDisplayValue(DEFAULT_GITHUB_REPOSITORY);

    expect(input).toBeInTheDocument();
  });

  test('should call setSearchTerm with new value on input change', () => {
    const searchTerm = 'new search term';

    render(<RepositorySearchBar />);

    const paramTarget = { target: { value: searchTerm } };

    const input = screen.getByLabelText('Search Github repository');

    fireEvent.change(input, paramTarget);

    expect(mockSearchTerm).toHaveBeenCalledWith('new search term');
  });
});
