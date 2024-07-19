import { useState, useEffect } from 'react';
import { Article, fetchMostPopularArticles } from '../services/api';


export const useApiCall = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData =async()=>{
      setLoading(true)
      try {
        const data = await fetchMostPopularArticles(7);
        setArticles(data);
        setLoading(false);
        
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    }
    getData();

    return () => {
      setArticles([]);
      setLoading(false);
      setError(null);
    }
  }, []);

  return { articles, loading, error };
};