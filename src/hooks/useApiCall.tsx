import { useState, useEffect } from 'react';
import { Article, fetchMostPopularArticles } from '../services/api';


/**
 * Custom hook to fetch and manage the state of API data.
 *
 * @return {Object} An object containing the fetched articles, loading state, and error.
 * - `articles` {Array<Article>}: The array of fetched articles.
 * - `loading` {boolean}: The loading state indicating if the data is being fetched.
 * - `error` {string | null}: The error message if there was an error fetching the data, otherwise null.
 */
export const useApiCall = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchMostPopularArticles(7);
        setArticles(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    getData();

    return () => {
      setArticles([]);
      setLoading(false);
      setError(null);
    };
  }, []);

  return { articles, loading, error };
};