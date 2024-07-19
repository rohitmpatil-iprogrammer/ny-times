import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../hooks/useResponsive";

type Props = {
  prevTitle: string;
  currentTitle: string;
};

export default function CustomBreadCrumb({ prevTitle, currentTitle }: Props) {
  const router = useNavigate();
  const Uplg = useResponsive("up", "lg");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router(-1);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="prev-title"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {prevTitle}
    </Link>,
    <Typography key="current-title" color="text.primary" sx={{ fontSize: Uplg? "1.2rem": "0.8rem" }}>
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
