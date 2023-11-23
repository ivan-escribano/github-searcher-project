import { render, screen } from '@testing-library/react';
import React from 'react';

import RepositoryCardSkeleton from './RepositoryCardSkeleton.component';

import '@testing-library/jest-dom';

describe('RepositoryCardSkeleton', () => {
  test('should render the correct number of skeletons', () => {
    const skeletonsNumber = 5;

    render(<RepositoryCardSkeleton skeletonsNumber={skeletonsNumber} />);

    expect(screen.getAllByRole('img')).toHaveLength(skeletonsNumber);
  });
});
