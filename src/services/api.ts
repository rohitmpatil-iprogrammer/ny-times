/**
 * Import the axios library.
 */
import axios from "axios";

/**
 * Define the API key for the New York Times Most Popular Articles API.
 */
const API_KEY = import.meta.env.VITE_APP_API_KEY;

/**
 * Define the base URL for the New York Times Most Popular Articles API.
 */
const BASE_URL = import.meta.env.VITE_APP_END_POINT;

/**
 * Interface representing an article.
 */
export interface Article {
  id: number;
  title: string;
  media: any;
  abstract: string;
  url: string;
  byline: string;
}

/**
 * Fetches the most popular articles from the New York Times Most Popular Articles API.
 *
 * @param {number} period - The period of time to fetch articles for. Defaults to 1.
 * @returns {Promise<Article[]>} - A promise that resolves to an array of Article objects.
 */
export const fetchMostPopularArticles = async (
  period: number = 1
): Promise<Article[]> => {
  /**
   * Make a GET request to the API using axios.
   */
  const response = await axios.get(
    `${BASE_URL}/${period}.json?api-key=${API_KEY}`
  );

  /**
   * Return the results from the response.
   */
  return response.data.results;
};