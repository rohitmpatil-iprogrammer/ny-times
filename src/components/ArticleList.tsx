import React from "react";
import { Article } from "../services/api";
import CustomCard from "../common/CustomCard";
import { Helmet } from "react-helmet-async";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        const imageSrc = article?.media?.[0]?.["media-metadata"]?.[2]?.url;
        return (
         <CustomCard id={article.id} abstract={article.abstract} title={article.title} imageSrc={imageSrc} />
        );
      })}
    </>
  );
};

export default ArticleList;
