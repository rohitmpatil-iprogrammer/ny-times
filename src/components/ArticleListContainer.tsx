import React, { useState, useEffect } from "react";
import { fetchMostPopularArticles, Article } from "../services/api";
import ArticleList from "./ArticleList";
import { Container, Grid, Stack } from "@mui/material";
import GlobalLoader from "../common/GlobalLoader";
import { useApiCall } from "../hooks/useApiCall";
import ErrorPage from "../common/Error";

const ArticleListContainer: React.FC = () => {
  const { loading, articles, error } = useApiCall();

  if (loading) return <GlobalLoader />;
  if (error) return <ErrorPage errorMessage={error} />;
  return (
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid container spacing={2}>
            {articles.map((article) => (
              <Grid key={article.id} item xs={12} sm={6} md={4}>
                <ArticleList articles={[article]} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
  );
};

export default ArticleListContainer;
