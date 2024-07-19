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

const GlobalLoader = () => {
  return (
    <Overlay>
      <CircularProgress />
    </Overlay>
  );
};

export default GlobalLoader;