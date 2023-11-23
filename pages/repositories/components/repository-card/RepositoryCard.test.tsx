import { render, screen } from '@testing-library/react';
import React from 'react';

import RepositoryCard from './RepositoryCard.component';
import { mockRepository } from './RepositoryCard.mock';
import { formatDateCard } from './RepositoryCard.utils';

describe('RepositoryCard', () => {
  test('should render repository information', () => {
    render(<RepositoryCard repository={mockRepository} />);

    const fullName = screen.getByText('@ user/repo');
    const description = screen.getByText('This is a test repo');
    const language = screen.getByText('JavaScript');
    const stars = screen.getByText('42');

    expect(fullName).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(language).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
  });

  test('should render topics', () => {
    render(<RepositoryCard repository={mockRepository} />);

    const topic1 = screen.getByText('topic1');
    const topic2 = screen.getByText('topic2');

    expect(topic1).toBeInTheDocument();
    expect(topic2).toBeInTheDocument();
  });

  test('should format and render dates', () => {
    render(<RepositoryCard repository={mockRepository} />);

    const updatedDate = screen.getByText('Updated: Jan 01, 2023');
    const createdDate = screen.getByText('Created: Jan 01, 2023');

    expect(updatedDate).toBeInTheDocument();
    expect(createdDate).toBeInTheDocument();
  });

  test('should open GitHub repo when clicked', () => {
    window.open = jest.fn();

    render(<RepositoryCard repository={mockRepository} />);

    const button = screen.getByRole('button');

    button.click();

    const repositoryUrl = 'https://github.com/ivan-escribano/github-searcher-timedi';

    expect(window.open).toHaveBeenCalledWith(repositoryUrl, '_blank');
  });

  test('should use Default color when language is not found', () => {
    const mockRepositoryWithoutLanguage = { ...mockRepository, language: null };

    render(<RepositoryCard repository={mockRepositoryWithoutLanguage} />);

    const languageColorElement = screen.getByTestId('language-color');

    expect(languageColorElement).toHaveStyle('background-color: #808080');
  });
});

describe('Repository card utils', () => {
  test('should format ISO date correctly', () => {
    const isoDate = '2023-01-01T12:00:00Z';

    const correctDate = 'Jan 01, 2023';

    const formattedDate = formatDateCard(isoDate);

    expect(formattedDate).toBe(correctDate);
  });
});
