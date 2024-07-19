import { CircularProgress, Container, styled } from "@mui/material";

const Overlay = styled(Container)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.palette.background.default,
  opacity: 0.5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

/**
 * Component to display a loading spinner over the entire screen.
 */
const GlobalLoader = () => {
  /**
   * Render method to display the loading spinner.
   * @returns {ReactNode} The rendered content.
   */
  return (
    <Overlay>
      <CircularProgress />
    </Overlay>
  );
};

export default GlobalLoader;