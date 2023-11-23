import { fireEvent, render, screen } from '@testing-library/react';

import ActionButton from './ActionButton.component';
import { handleClick } from './ActionButton.mock';

describe('ActionButton Component', () => {
  it('should call onClick prop when clicked', () => {
    render(<ActionButton onClick={handleClick}>Click Me</ActionButton>);

    const button = screen.getByText(/click me/i);

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render p tag element in children props', () => {
    render(
      <ActionButton onClick={handleClick}>
        <p>This is a test</p>
      </ActionButton>
    );

    const paragraph = screen.getByText(/This is a test/i);

    expect(paragraph).toBeInTheDocument();
  });
});
