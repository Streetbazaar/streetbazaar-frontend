import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SEO from "../../../components/seo/SEO";
import Spinner from "../../../components/spinner/Spiner";
import { useGetInvestmentAdDetails } from "../../../hooks/useGetInvestmentAdDetails";
import InvestmentAdImageSlider from "./InvestmentAdImageSlider";
import { ProductDetailsContainer } from "./InvestmentAdDetails.styled";

export default function InvestmentAdDetails() {
  const { advertsList } = useSelector((state) => state.adverts);

  const searchParam = new URLSearchParams(window.location.search);
  const id = searchParam.get("id");
  const { adDetails, loading } = useGetInvestmentAdDetails(id);

  useEffect(() => {
    document.title = `Streetbazaar | Investment Advert Details`;
    window.scrollTo({
      top: 0,
    });
  }, []);
  
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <ProductDetailsContainer>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <>
            {Object.keys(adDetails).length > 1 && (
              <>
                {" "}
                <SEO
                  title={adDetails?.title}
                  description={adDetails?.description}
                  name="Streetbazaar"
                  type="product detail"
                  ogImage={adDetails?.advert_image_url}
                />
                <InvestmentAdImageSlider product={adDetails} />
              </>
            )}
          </>
        )}
      </ProductDetailsContainer>
    </motion.main>
  );
}
