import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchMeals = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(null);
      const response = await fetch(import.meta.env.VITE_API_URL + `${url}`);

      if (!response.ok) {
        throw new Error("");
      }

      const data = await response.json();

      setMeals(data);
    } catch (err) {
      setHasError("Something went wrong!");
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return { meals, isLoading, hasError };
};

export default useFetch;
