import React, { ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

/**
 * ErrorBoundary component to catch errors in child components.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * Constructor for ErrorBoundary component.
   * @param {ErrorBoundaryProps} props - The props for the ErrorBoundary component.
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Static method to update state when an error occurs.
   * @param {Error} error - The error that occurred.
   * @returns {ErrorBoundaryState} The updated state.
   */
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  /**
   * Method called after an error is caught.
   * @param {Error} error - The error that occurred.
   * @param {ErrorInfo} errorInfo - Information about the error.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  /**
   * Render method to display content based on error state.
   * @returns {ReactNode} The rendered content.
   */
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
