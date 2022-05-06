import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders correct count', () => {
  render(
    <Counter count={1000} onIncrement={() => {}} />
  );

  expect(screen.getByText(/1000/i)).toBeInTheDocument();
});

test('calls onIncrement', () => {
  const spy = jest.fn();

  render(
    <Counter count={1000} onIncrement={spy} />
  );

  fireEvent.click(screen.getByText(/1000/i))

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(1000);
});
