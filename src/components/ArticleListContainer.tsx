import React, { useState, useEffect } from "react";
import { fetchMostPopularArticles, Article } from "../services/api";
import ArticleList from "./ArticleList";
import { Box, Container, Grid, Stack } from "@mui/material";
import GlobalLoader from "../common/GlobalLoader";
import { useApiCall } from "../hooks/useApiCall";
import ErrorPage from "../common/Error";

const ArticleListContainer: React.FC = () => {
  const { loading, articles, error } = useApiCall();

  if (loading) return <GlobalLoader />;
  if (error) return <ErrorPage errorMessage={error} />;
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
