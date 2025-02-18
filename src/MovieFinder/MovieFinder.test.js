import { render, screen } from '@testing-library/react';
import MovieFinder from './MovieFinder';

test('renders learn react link', () => {
  render(<MovieFinder />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
