import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FETCH_CATALOGUE } from "../components/api";

export const useCatalogue = (business_id) => {
  const [catalogueDetails, setCatalogueDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getCatalogue = async (business_id) => {
    setLoading(true);
    try {
      const response = await FETCH_CATALOGUE(business_id);
      

      if (response) {
        setLoading(false);
        
        setCatalogueDetails(response);
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
    getCatalogue(business_id);
  }, []);

  return { catalogueDetails, loading };
};
