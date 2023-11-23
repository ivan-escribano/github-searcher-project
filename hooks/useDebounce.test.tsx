import { act, renderHook } from '@testing-library/react';

import useDebounce from './useDebounce.hook';

describe('useDebounce hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should initialize debouncedValue with the initial value', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));

    expect(result.current).toBe('initial');
  });

  test('should update debounced value after specified delay', () => {
    const { result } = renderHook(() => useDebounce('test', 500));

    expect(result.current).toBe('test');

    jest.advanceTimersByTime(500);
    expect(result.current).toBe('test');
  });

  test('should handle rapid value changes correctly', async () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: 'initial' },
    });

    rerender({ value: 'updated' });

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(result.current).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(result.current).toBe('updated');
  });

  test('should clear timer on unmount', () => {
    const { unmount } = renderHook(() => useDebounce('value', 500));

    unmount();
  });

  test('should handle delay value change', () => {
    const { result, rerender } = renderHook(({ delay }) => useDebounce('value', delay), {
      initialProps: { delay: 500 },
    });

    rerender({ delay: 1000 });

    jest.advanceTimersByTime(500);

    expect(result.current).toBe('value');

    jest.advanceTimersByTime(500);

    expect(result.current).toBe('value');
  });
});
