import React from "react";
import { useParams } from "react-router-dom";
import { Article } from "../services/api";
import { Container, Link, Typography } from "@mui/material";
import { useApiCall } from "../hooks/useApiCall";
import GlobalLoader from "../common/GlobalLoader";
import ErrorPage from "../common/Error";
import CustomCard from "../common/CustomCard";
import { Helmet } from "react-helmet-async";
import CustomBreadCrumb from "../common/CustomBreadCrumb";
import { useResponsive } from "../hooks/useResponsive";

const ArticleDetail: React.FC = () => {
  const UpLg = useResponsive("up", "lg");

  const { id = "" } = useParams<{ id: string }>();
  const { articles, loading, error } = useApiCall();

  const article = articles.find((a) => a.id.toString() === id);
  const imageSrc = article?.media?.[0]?.["media-metadata"]?.[2]?.url;
  if (loading) return <GlobalLoader />;
  if (error) return <ErrorPage errorMessage={error} />;
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

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
      </Helmet>
      <CustomBreadCrumb prevTitle="List" currentTitle={article.title} />
      <Container
        sx={{
          paddingTop: UpLg ? 20 : 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomCard
          id={article.id}
          abstract={article.abstract}
          title={article.title}
          imageSrc={imageSrc}
          byline={article.byline}
          url={article.url}
        />
      </Container>
    </>
  );
};

export default ArticleDetail;
