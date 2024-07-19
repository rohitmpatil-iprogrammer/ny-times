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

/**
 * CustomBreadCrumb component represents a breadcrumb navigation element.
 * It displays the previous and current titles as breadcrumbs with clickable links.
 *
 * @param {string} prevTitle - The title of the previous breadcrumb.
 * @param {string} currentTitle - The title of the current breadcrumb.
 */
export default function CustomBreadCrumb({ prevTitle, currentTitle }: Props) {
  const router = useNavigate();
  const Uplg = useResponsive("up", "lg");

  /**
   * handleClick function is called when a breadcrumb link is clicked. only return to previous route router(-1)
   * It prevents the default behavior of the click event and navigates back.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} event - The click event.
   */
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router(-1);
  };

  // Define the breadcrumbs array with links for previous and current titles
  const breadcrumbs = [
    <Link
      underline="hover"
      key="prev-title"
      color="inherit"
      href="#"
      onClick={handleClick}
    >
      {prevTitle}
    </Link>,
    <Typography key="current-title" color="text.primary" sx={{ fontSize: Uplg ? "1.2rem" : "0.8rem" }}>
      {currentTitle}
    </Typography>,
  ];

  // Render the breadcrumbs using Material-UI components
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
