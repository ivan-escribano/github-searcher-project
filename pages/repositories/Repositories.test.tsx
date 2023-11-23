import { render, screen } from '@testing-library/react';
import React from 'react';

import Repositories from './index.page';

import '@testing-library/jest-dom';

jest.mock('./Repositories.context', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('./components/repository-search-bar/RepositorySearchBar.component', () => ({
  __esModule: true,
  default: () => <div>MockRepositorySearchBar</div>,
}));

jest.mock('./components/repository-list/RepositoryList.component', () => ({
  __esModule: true,
  default: () => <div>MockRepositoryList</div>,
}));

describe('Repositories', () => {
  test('should render the logo', () => {
    render(<Repositories />);
    const logoImage = screen.getByAltText('Logo GitHub Searcher');
    expect(logoImage).toBeInTheDocument();
  });

  test('should render the repository search bar', () => {
    render(<Repositories />);
    expect(screen.getByText('MockRepositorySearchBar')).toBeInTheDocument();
  });

  test('should render the repository list', () => {
    render(<Repositories />);
    expect(screen.getByText('MockRepositoryList')).toBeInTheDocument();
  });
});
