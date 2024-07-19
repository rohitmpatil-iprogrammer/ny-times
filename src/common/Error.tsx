import { Container, Typography } from "@mui/material";

/**
 * ErrorPage component displays an error message.
 * @param {string} errorMessage - The error message to display.
 * @returns {JSX.Element} The error page component.
 */
const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {
  // Display an error message if provided, otherwise show a default message
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Error
      </Typography>
      <Typography variant="body1" gutterBottom>
        {errorMessage ? errorMessage : 'Something went wrong.'}
      </Typography>
    </Container>
  );
};

export default ErrorPage;