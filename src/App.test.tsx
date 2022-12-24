import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('mock api', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/HungTP/i)
  expect(linkElement).toBeInTheDocument();
});

