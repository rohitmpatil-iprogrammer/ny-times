import { Container, Typography } from "@mui/material";

const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
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