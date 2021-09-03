import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';

test('Check for deezer text in navbar', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Deezer/i);
  expect(linkElement).toBeInTheDocument();
});




