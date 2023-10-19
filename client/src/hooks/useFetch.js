import { useState, useEffect } from "react";

export const useFetch = (fetchFunction, initialData = []) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    fetchFunction()
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error(err));
  }, [fetchFunction]);

  return data;
};
