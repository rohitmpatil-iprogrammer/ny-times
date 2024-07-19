
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = ({ title }: { title: string }) => {
  return (
    <AppBar position="fixed" sx={{ mb: 2  }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "center", textDecoration: "italic"}}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
