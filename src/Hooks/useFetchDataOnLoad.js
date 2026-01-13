import { useEffect } from "react";

export const useFetchDataOnLoad = (apiUrl, handleData, deps = []) => {
  useEffect(() => {
    let ignore = false;

    async function getData() {
      try {
        if (ignore) return;
        const response = await fetch(apiUrl);
        const data = await response.json();
        handleData(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    getData();
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, ...deps]);
};
