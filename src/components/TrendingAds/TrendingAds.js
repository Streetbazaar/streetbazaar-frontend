import React from "react";
import Product from "./Trending-Ads";
import image1 from "./TrendingAds-images/image1.png";
import image2 from "./TrendingAds-images/image2.png";
import image3 from "./TrendingAds-images/image3.png";
import { ProductItem, ProductContainer, Div } from "./TrendingAds.styled";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "Hp Laptop",
        imgURL: image1,
        price: "N500,000",
    },
    {
        id: 2,
        name: "Dell Laptop",
        imgURL: image2,
        price: "N600,000",
    },
    {
        id: 3,
        name: "Mac",
        imgURL: image1,
        price: "N546,777",
    },
    {
        id: 4,
        name: "Iphone 11",
        imgURL: image3,
        price: "Price",
    },
    {
        id: 5,
        name: "Hp Laptop",
        imgURL: image1,
        price: "N500,000",
    },
    {
        id: 6,
        name: "Dell Laptop",
        imgURL: image2,
        price: "N600,000",
    },
    {
        id: 7,
        name: "Mac",
        imgURL: image1,
        price: "N546,777",
    },
    {
        id: 8,
        name: "Iphone 11",
        imgURL: image3,
        price: "Price",
    },
];
const TrendingProducts = () => {
    return (
        <>
            {" "}
            <Div>
                <span>Trending Ads</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 17L17 7"
                        stroke="#F7C89A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M7 7H17V17"
                        stroke="#F7C89A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Div>
            <ProductContainer>
                {DUMMY_PRODUCTS.map((product, index) => (
                    <ProductItem key={index}>
                        <Product
                            id={product.id}
                            name={product.name}
                            imgURL={product.imgURL}
                            price={product.price}
                        />
                    </ProductItem>
                ))}
            </ProductContainer>
        </>
    );
};

export default TrendingProducts;
