import { useEffect, useState } from "react";
import axios from "axios";
const useGetAll = (category, records) => {
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const apiKey = "871be9967c2e4db3a9f137e51974a05a";
  const fetchNewsApi = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${records}&apiKey=${apiKey}`
      );
      setData(await response.data.articles);
      setTotalResults(response.data.totalResults);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNewsApi();
  }, [records]);

  return { data, totalResults, loading };
};
export default useGetAll;
