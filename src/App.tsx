import { HelmetProvider } from "react-helmet-async";
import { Header } from "./common/Header";
import AppRoutes from "./routes";
import { Stack } from "@mui/material";
import ErrorBoundary from "./common/ErrorBoundary";

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Header title="New York Times Articles"/>
        <main>
          <Stack sx={{ pt: 10, pb: 5 }}>
            <AppRoutes />
          </Stack>
        </main>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
