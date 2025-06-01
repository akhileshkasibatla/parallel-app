import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AddInvestor } from './AddInvestor';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AddInvestor component', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Reset all mocks before each test
  });

  it('renders form inputs', () => {
    render(<AddInvestor />);
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Street Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('State')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('5 Digits only'),
    ).toBeInTheDocument();
    expect(screen.getByText(/add investor/i)).toBeInTheDocument();
  });

  it('updates form fields and submits successfully', async () => {
    jest.useFakeTimers();

    mockedAxios.post.mockResolvedValueOnce({ status: 201 });

    render(<AddInvestor />);

    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { name: 'firstName', value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { name: 'lastName', value: 'Doe' },
    });
    fireEvent.change(screen.getByTestId('dateOfBirth'), {
      target: { name: 'dateOfBirth', value: '1990-01-01' },
    });
    fireEvent.change(screen.getByTestId('phoneNumber'), {
      target: { name: 'phoneNumber', value: '1234567890' },
    });

    const file = new File(['abcd'], 'test.png', {
      type: 'image/png',
    });
    fireEvent.change(screen.getByTestId('fileInput'), {
      target: { files: [file] },
    });

    fireEvent.submit(screen.getByTestId('investor-form'));

    //Adding delay of 1 second to trigger the setTimeout
    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    jest.useRealTimers();
  });

  it('shows error message on failed submit', async () => {
    jest.useFakeTimers();

    mockedAxios.post.mockRejectedValueOnce(new Error('Network Error'));

    render(<AddInvestor />);

    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { name: 'firstName', value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { name: 'lastName', value: 'Doe' },
    });
    fireEvent.change(screen.getByTestId('dateOfBirth'), {
      target: { name: 'dateOfBirth', value: '1990-01-01' },
    });
    fireEvent.change(screen.getByTestId('phoneNumber'), {
      target: { name: 'phoneNumber', value: '1234567890' },
    });

    const file = new File(['abcd'], 'test.png', {
      type: 'image/png',
    });

    fireEvent.change(screen.getByTestId('fileInput'), {
      target: { files: [file] },
    });

    fireEvent.submit(screen.getByTestId('investor-form'));

    //Adding delay of 1 second to trigger the setTimeout
    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId('error')).toHaveTextContent(
        /Something went wrong/i,
      );
    });

    jest.useRealTimers();
  });
});
