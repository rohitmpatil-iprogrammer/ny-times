
// All necessary imports here
import { render } from '@testing-library/react';
import { Header } from '../Header'; // Assume your component file is Header.tsx

describe('Header Component Tests', () => {
  it('should render the provided title text', () => {
    const { getByText } = render(<Header title="Test Title" />);
    const headingElement = getByText('Test Title');
    expect(headingElement).toBeInTheDocument();
  });

  it('should apply fixed position to AppBar', () => {
    const { container } = render(<Header title="Test Title" />);
    const appBar = container.querySelector('.MuiAppBar-root');
    expect(appBar).toHaveStyle('position: fixed');
  });

  it('should render AppBar with proper Typography styles', () => {
    const { container } = render(<Header title="Another Title" />);
    const typography = container.querySelector('.MuiTypography-root');
    expect(typography).toHaveStyle('flexGrow: 1');
  });

  it('renders empty title properly', () => {
    const { container } = render(<Header title="" />);
    const typography = container.querySelector('.MuiTypography-root');
    expect(typography).toHaveTextContent('');
  });

  it('should handle long title strings gracefully', () => {
    const longTitle = Array(500).fill('LongTitle').join(' ');
    const { getByText } = render(<Header title={longTitle} />);
    expect(getByText(longTitle)).toBeInTheDocument();
  });

  // Negative test case it('does not break without a title', () => {
    console.error = jest.fn(); // Mock console.error to avoid polluting test output
    render(<Header title={undefined as unknown as string} />);
    expect(console.error).not.toHaveBeenCalled(); // Check if React logs any PropTypes warnings
  });
