
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = ({ title }: { title: string }) => {
  return (
    <AppBar position="fixed" sx={{ mb: 2  }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
