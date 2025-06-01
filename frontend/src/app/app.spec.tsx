import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './app';

console.warn = () => {};

describe('App component', () => {
  it('renders AddInvestor component with form fields', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // Check for expected form fields from AddInvestor
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add investor/i }),
    ).toBeInTheDocument();
  });
});
