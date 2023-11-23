import { render, screen } from '@testing-library/react';
import React from 'react';

import Repositories, { getServerSideProps } from './index.page';
import { createMockContext } from './Repositories.mock';

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
    render(<Repositories initialPage={0} initialSearchTerm={''} />);
    const logoImage = screen.getByAltText('Logo GitHub Searcher');
    expect(logoImage).toBeInTheDocument();
  });

  test('should render the repository search bar', () => {
    render(<Repositories initialPage={0} initialSearchTerm={''} />);
    expect(screen.getByText('MockRepositorySearchBar')).toBeInTheDocument();
  });

  test('should render the repository list', () => {
    render(<Repositories initialPage={0} initialSearchTerm={''} />);
    expect(screen.getByText('MockRepositoryList')).toBeInTheDocument();
  });

  test('should return initial page and search term based on query', async () => {
    const context = createMockContext({ page: '2', name: 'test-term' });
    const response = await getServerSideProps(context);

    expect(response).toEqual({
      props: {
        initialPage: 2,
        initialSearchTerm: 'test-term',
      },
    });
  });

  test('should handle missing query parameters', async () => {
    const context = createMockContext({});
    const response = await getServerSideProps(context);

    expect(response).toEqual({
      props: {
        initialPage: 0,
        initialSearchTerm: '',
      },
    });
  });
});
