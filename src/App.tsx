import { HelmetProvider } from "react-helmet-async";
import { Header } from "./common/Header";
import AppRoutes from "./routes";
import { Stack } from "@mui/material";
import ErrorBoundary from "./common/ErrorBoundary";

/**
 * The main component of the application.
 *
 * This component serves as the entry point for the application and renders the main UI structure.
 * It uses various components and elements to build the application's layout and functionality.
 *
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return (
    <HelmetProvider>
      {/* Wraps the entire application with HelmetProvider, which provides server-side rendering support for React Helmet*/}
      <ErrorBoundary>
        {/* Wraps the entire application with ErrorBoundary, which catches and displays any errors that occur within the component tree */}
        <Header title="New York Times Articles"/>
        {/* Renders the Header component, which displays the application title */}
        <main>
          {/* Wraps the main content of the application */}
          <Stack sx={{ pt: 10, pb: 5 }}>
            {/* Renders the AppRoutes component, which defines the routes and components for the application */}
            <AppRoutes />
          </Stack>
        </main>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
