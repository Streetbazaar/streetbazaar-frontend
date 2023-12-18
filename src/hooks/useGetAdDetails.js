import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FETCH_AD_DETAILS } from "../components/api";

export const useGetAdDetails = (id) => {
  const [adDetails, setAdDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getAdDetails = async (id) => {
    setLoading(true);
    try {
      const response = await FETCH_AD_DETAILS(id);
      

      if (response) {
        setLoading(false);
        
        setAdDetails(response);
        console.log(response);
      }
    } catch (err) {
      setLoading(false);
      toast(err.message, {
        type: "error",
      });
    }
  };

  useEffect(() => {
    getAdDetails(id);
  }, []);

  return { adDetails, loading };
};
