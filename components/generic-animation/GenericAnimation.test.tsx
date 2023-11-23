import { render, screen } from '@testing-library/react';
import React from 'react';

import GenericAnimation from './GenericAnimation.component';

import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

describe('GenericAnimation', () => {
  test('should render children correctly', () => {
    render(
      <GenericAnimation>
        <div>Test Child</div>
      </GenericAnimation>
    );
    const divChildren = screen.getByText('Test Child');

    expect(divChildren).toBeInTheDocument();
  });
});
