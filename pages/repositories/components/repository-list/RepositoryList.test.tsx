import { act, render, screen } from '@testing-library/react';

import { REPOSITORIES_PER_PAGE } from '@/api/repositories/repositories.config';
import RepositoryList from './RepositoryList.component';
import {
  mockIsLoading,
  mockRepositories,
  mockSetCurrentPage,
  mockTotalNumberRepositories,
  setMockIsLoading,
  setMockTotalNumberRepositories,
} from './RepositoryList.mock';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    query: { page: '1' },
  }),
}));

jest.mock('../../Repositories.context', () => ({
  useRepositoriesContext: () => ({
    repositories: mockRepositories,
    isLoading: mockIsLoading,
    totalNumberRepositories: mockTotalNumberRepositories,
    setCurrentPage: mockSetCurrentPage,
  }),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

describe('RepositoryList', () => {
  beforeEach(() => {
    setMockIsLoading(false);
    setMockTotalNumberRepositories(12);
  });

  test('should render the repository list with repository cards', async () => {
    render(<RepositoryList />);

    const cardRepositoryDescription = screen.getByText('This is a test repo');

    expect(cardRepositoryDescription).toBeInTheDocument();
  });

  test('should display loading skeletons when loading', () => {
    setMockIsLoading(true);

    render(<RepositoryList />);

    const skeletonCard = screen.getAllByRole('img');

    expect(skeletonCard).toHaveLength(6);
  });

  test('should handle pagination', async () => {
    render(<RepositoryList />);

    await act(async () => {
      const paginationButton = screen.getByText('2');

      paginationButton.click();
    });
  });

  test('should calculate and pass the correct number of pages to GenericPagination', () => {
    const expectedNumberPages = Math.ceil(mockTotalNumberRepositories / REPOSITORIES_PER_PAGE);

    render(<RepositoryList />);

    const paginationComponent = screen.getByRole('navigation');

    expect(paginationComponent).toHaveTextContent(expectedNumberPages.toString());
    expect(paginationComponent).not.toHaveTextContent('3');
  });

  test('should handle zero total repositories correctly', () => {
    setMockTotalNumberRepositories(0);

    render(<RepositoryList />);

    const paginationComponent = screen.queryByRole('navigation');

    expect(paginationComponent).not.toBeInTheDocument();
  });

  test('should update the router query on pagination change', async () => {
    render(<RepositoryList />);

    await act(async () => {
      const paginationButton = screen.getByText('2');
      paginationButton.click();
    });

    expect(mockPush).toHaveBeenCalled();
  });
});
