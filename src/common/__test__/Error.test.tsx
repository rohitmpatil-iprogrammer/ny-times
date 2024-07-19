
import { render } from '@testing-library/react';
import ErrorPage from '../Error'; // Adjust the import path based on your project structure

describe('ErrorPage', () => {
  it('should render the component with an error message', () => {
    const { getByText } = render(<ErrorPage errorMessage="Something went wrong" />);
    expect(getByText("Error")).toBeInTheDocument();
    expect(getByText("Something went wrong")).toBeInTheDocument();
  });

  it('should correctly display different error messages', () => {
    const { getByText, rerender } = render(<ErrorPage errorMessage="Network error" />);
    expect(getByText("Network error")).toBeInTheDocument();

    rerender(<ErrorPage errorMessage="Unauthorized access" />);
    expect(getByText("Unauthorized access")).toBeInTheDocument();
  });
});

