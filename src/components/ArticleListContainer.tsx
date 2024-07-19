import React from "react";
import { Box, Container, Stack } from "@mui/material";
import GlobalLoader from "../common/GlobalLoader";
import { useApiCall } from "../hooks/useApiCall";
import ErrorPage from "../common/Error";
import ArticleList from "./ArticleList";

/**
 * Component that fetches a list of articles and displays them using the ArticleList component.
 */
const ArticleListContainer: React.FC = () => {
  // Fetch article data using the useApiCall custom hook
  const { loading, articles, error } = useApiCall();

  // Display a global loader while data is loading
  if (loading) return <GlobalLoader />;

  // Display an error page if there is an error fetching data
  if (error) return <ErrorPage errorMessage={error} />;

  // Render the list of articles using the ArticleList component
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          }}
          sx={{ mb: 2 }}
        >
          {articles.map((article) => (
            <ArticleList key={article.id} articles={[article]} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default ArticleListContainer;