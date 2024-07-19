import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_END_POINT;

export interface Article {
  id: number;
  title: string;
  media: any;
  abstract: string;
  url: string;
  byline: string;
}

export const fetchMostPopularArticles = async (
  period: number = 1
): Promise<Article[]> => {
  const response = await axios.get(
    `${BASE_URL}/${period}.json?api-key=${API_KEY}`
  );
  return response.data.results;
};
