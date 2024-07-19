import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

type Props = {
  prevTitle: string;
  currentTitle: string;
};

export default function CustomBreadCrumb({ prevTitle, currentTitle }: Props) {
  const router = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router(-1);
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {prevTitle}
    </Link>,
    <Typography key="3" color="text.primary">
      {currentTitle}
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{ ml: 2 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
