import React from "react";
import TrendingAds from "../components/TrendingAds/TrendingAds";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const ProductDetails = () => {

    return (
        <div>
            <main
                style={{
                    padding: "15px",
                    maxWidth: "1440px",
                    margin: "0 auto",
                   
                    marginBottom: 40,
                }}
            >
                <ProductDetail />
                <TrendingAds />
            </main>

        </div>
    );
};

export default ProductDetails;
