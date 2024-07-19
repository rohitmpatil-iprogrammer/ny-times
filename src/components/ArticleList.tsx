import React from "react";
import { Article } from "../services/api";
import CustomCard from "../common/CustomCard";

interface ArticleListProps {
  articles: Article[];
}

/**
 * A React component for displaying a list of articles.
 *
 * @component
 */
const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {

  return (
    <>
      {articles.map((article) => {
        // Extract the image source URL from the article
        const imageSrc = article?.media?.[0]?.["media-metadata"]?.[2]?.url;
        return (
         <CustomCard key={article.id} id={article.id} abstract={article.abstract} title={article.title} imageSrc={imageSrc} />
        );
      })}
    </>
  );
};

/**
 * Props for the ArticleList component.
 * 
 * @typedef {Object} ArticleListProps
 * @property {Article[]} articles - An array of Article objects to display.
 */

export default ArticleList;
