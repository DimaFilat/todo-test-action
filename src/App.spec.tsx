import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('App should be in document', () => {
    render(<App />);

    expect(screen.getByText(/Count/)).toBeInTheDocument();
  });
});
