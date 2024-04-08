import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [meals, setMeals] = useState([]);
  const [isLodding, setIsLodding] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchMeals = useCallback(async () => {
    try {
      setIsLodding(true);
      setHasError(null);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("");
      }

      const data = await response.json();

      setMeals(data);
    } catch (err) {
      setHasError("Somthing went wrong");
    }
    setIsLodding(false);
  }, [url]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return { meals, isLodding, hasError };
};

export default useFetch;