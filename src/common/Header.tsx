
import { AppBar, Toolbar, Typography } from '@mui/material';

/**
 * This is a React functional component that renders a header.
 * @param {Object} props - The props object
 * @param {string} props.title - The title to display in the header
 * @returns {JSX.Element} React element
 */
export const Header = ({ title }: { title: string }) => {
  return (
    <AppBar position="fixed" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "center", textDecoration: "italic" }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};