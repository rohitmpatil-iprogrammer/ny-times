import React from "react";
import { useParams } from "react-router-dom";
import { Article } from "../services/api";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { useApiCall } from "../hooks/useApiCall";
import GlobalLoader from "../common/GlobalLoader";
import ErrorPage from "../common/Error";
import { Helmet } from "react-helmet-async";
import CustomBreadCrumb from "../common/CustomBreadCrumb";
import { useResponsive } from "../hooks/useResponsive";

/**
 * Component to display details of a specific article based on the ID parameter in the URL.
 */
const ArticleDetail: React.FC = () => {
  // Get the screen size breakpoint for responsiveness
  const UpLg = useResponsive("up", "lg");

  // Get the 'id' parameter from the URL using the useParams hook
  const { id = "" } = useParams<{ id: string }>();

  // Fetch article data using the useApiCall custom hook
  const { articles, loading, error } = useApiCall();

  // Find the article with the matching 'id' from the fetched data
  const article = articles.find((a) => a.id.toString() === id);

  // Get the image source URL from the article data for display
  const imageSrc = article?.media?.[0]?.["media-metadata"]?.[2]?.url;

  // Render loading spinner if data is still loading
  if (loading) return <GlobalLoader />;

  // Render error page if there is an error fetching data
  if (error) return <ErrorPage errorMessage={error} />;

  // Display a message if no article is found with the given 'id'
  if (!article) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4">Article not found.</Typography>
        <Typography variant="body1" gutterBottom>
          Oops! The article you are looking for does not exist.
        </Typography>
        <Link href="/" underline="none">
          <Typography variant="body1" color="primary">
            Go back to Home
          </Typography>
        </Link>
      </Container>
    );
  }

  // Render the article details if article is found
  return (
    <>
      <Helmet>
        <title>{article.title}</title>
      </Helmet>
      <CustomBreadCrumb prevTitle="List" currentTitle={article.title} />
      <Container
        maxWidth={UpLg ? "md" : "sm"}
        sx={{
          paddingTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Box
            sx={{ width: "100%", height: UpLg ? 500 : 200, overflow: "hidden" }}
          >
            <img
              src={imageSrc}
              alt={article.title}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant={UpLg ? "h3" : "h4"} gutterBottom>
            {article.title}
          </Typography>
          <Typography variant={UpLg ? "body1" : "h6"} gutterBottom>
            {article.abstract}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Author: {article.byline}
          </Typography>
          <Typography variant="h5" gutterBottom>
            <a rel="noopener noreferrer" href={article?.url} target="_blank">
              Read More
            </a>
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default ArticleDetail;