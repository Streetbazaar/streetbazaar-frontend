import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SEO from "../../components/seo/SEO";
import ImageSlider from "./ImageSlider";
import { ProductDetailsContainer } from "./ProductDetails.styled";

export default function ProductDetails() {
  const { advertsList } = useSelector((state) => state.adverts);

  const searchParam = new URLSearchParams(window.location.search);
  const id = searchParam.get("id");
  const selectedProduct = advertsList.find((ad) => ad.id === Number(id));
  console.log(id, selectedProduct);
  useEffect(() => {
    document.title = `Streetbazaar | Product Details`;
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}
    >
      <ProductDetailsContainer>
        <SEO
          title={selectedProduct?.title}
          description={selectedProduct?.description}
          name="Streetbazaar"
          type="product detail"
          ogImage={selectedProduct?.pictures[0].image_url}
        />

        <ImageSlider product={selectedProduct} />
      </ProductDetailsContainer>
    </motion.main>
  );
}
