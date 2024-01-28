import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {FETCH_CATEGORY } from "../components/api";

export const useGetCategoryDetail = (id) => {
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [nextPage, setNextPage] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const getCategoryDetail = async (id) => {
    setLoading(true);
    try {
      const response = await FETCH_CATEGORY(id);

      if (response) {
        setLoading(false);

        setCategoryDetails(response?.results?.adverts);
        setNextPage(response?.next)
        console.log(response.next)
        
      }
    } catch (err) {
      setLoading(false);
      setError(err.message)
      toast(err.message, {
        type: "error",
      });
    }
  };

  useEffect(() => {
    getCategoryDetail(id);
  }, []);

  return { categoryDetails, nextPage, loading };
};
