import axios from "axios";

const API_KEY = "m9PzBHF9NKC3bZuaeU0T3ivyKlpHU6c1";
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed";

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
