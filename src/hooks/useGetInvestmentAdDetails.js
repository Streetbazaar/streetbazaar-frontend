import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FETCH_INVESTMENT_AD_DETAILS } from "../components/api";

export const useGetInvestmentAdDetails = (id) => {
  const [adDetails, setAdDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getAdDetails = async (id, signal) => {
    setLoading(true);
    try {
      const response = await FETCH_INVESTMENT_AD_DETAILS(id, { signal });

      if (response) {
        setLoading(false);

        setAdDetails(response);
        // console.log(response);
      }
    } catch (err) {
      if (err.name !== "AbortError" && err.name !== "CanceledError") {
        // Only show the error toast if it's not an abort error
        setLoading(false);
        toast(err.message, {
          type: "error",
        });
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    getAdDetails(id, signal);

    return () => {
      // Abort the fetch request when the component unmounts
      abortController.abort();
    };
  }, []);

  return { adDetails, loading };
};
