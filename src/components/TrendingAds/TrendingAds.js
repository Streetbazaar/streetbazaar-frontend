import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrashImg from "../../assets/images/CharcoDeleteTrash.png";
import { fetchAdverts } from "../../features/advertSlice";
import Product from "./Trending-Ads";
import image1 from "./TrendingAds-images/image1.png";
import image2 from "./TrendingAds-images/image2.png";
import image3 from "./TrendingAds-images/image3.png";
import { Div, ProductContainer, ProductItem } from "./TrendingAds.styled";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Hp Laptop",
    image_url: image1,
    amount: "N500,000",
  },
  {
    id: 2,
    title: "Dell Laptop",
    image_url: image2,
    amount: "N600,000",
  },
  {
    id: 3,
    title: "Mac",
    image_url: image1,
    amount: "N546,777",
  },
  {
    id: 4,
    title: "Iphone 11",
    image_url: image3,
    amount: "amount",
  },
  {
    id: 5,
    title: "Hp Laptop",
    image_url: image1,
    amount: "N500,000",
  },
  {
    id: 6,
    title: "Dell Laptop",
    image_url: image2,
    amount: "N600,000",
  },
  {
    id: 7,
    title: "Mac",
    image_url: image1,
    amount: "N546,777",
  },
  {
    id: 8,
    name: "Iphone 11",
    image_url: image3,
    amount: "N4048",
  },
];
const TrendingProducts = () => {
  const dispatch = useDispatch();
  const { advertsList, advertStatus } = useSelector((state) => state.adverts);
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7H17V17"
            stroke="#F7C89A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Div>
      <ProductContainer>
        {advertsList?.slice(0, 20)?.map((product, index) => (
          <ProductItem key={index}>
            <Product
              id={product?.id}
              name={product?.title}
              imgURL={product?.pictures[0]?.image_url}
              price={product?.price}
            />
          </ProductItem>
        ))}
        {advertStatus === "loading" &&
          DUMMY_PRODUCTS.map((_item, i) => (
            <ProductItem key={i}>
              <Skeleton key={i} variant="rounded" width={"100%"} height={200} />
              <Skeleton key={i} variant="rounded" width={"40%"} height={10} />
              <Skeleton key={i} variant="rounded" width={"20%"} height={10} />
              <Skeleton key={i} variant="rounded" width={"100%"} height={46} />
            </ProductItem>
          ))}

        {advertStatus !== "loading" && advertsList.length === 0 ? (
          <div className="emptyAd">
            <img src={TrashImg} alt="error" />
            <h1>Oops!</h1>
            <p>There are no adverts here</p>
          </div>
        ) : null}
      </ProductContainer>
    </>
  );
};

export default TrendingProducts;
