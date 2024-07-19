import { HelmetProvider } from "react-helmet-async";
import { Header } from "./common/Header";
import AppRoutes from "./routes";
import { Stack } from "@mui/material";

function App() {
  return (
    <HelmetProvider>
      <Header title="Popular Articles" />
      <main>
        <Stack sx={{ pt: 10, pb: 10}}>
          <AppRoutes />
        </Stack>
      </main>
    </HelmetProvider>
  );
}

export default App;
