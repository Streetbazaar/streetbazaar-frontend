import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrashImg from "../../assets/images/CharcoDeleteTrash.png";
import { fetchAdverts, loadMoreAdverts } from "../../features/advertSlice";
import Product from "./Trending-Ads";
import image1 from "./TrendingAds-images/image1.png";
import image2 from "./TrendingAds-images/image2.png";
import image3 from "./TrendingAds-images/image3.png";
import { Div, ProductContainer, ProductItem } from "./TrendingAds.styled";
import styled from "styled-components";
import { Colors } from "../../utils/colors";

const LoadMoreButton = styled.button`
  outline: none;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 20px;
  color: ${Colors.primary_color.color400};
  padding: 10px;
`

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
  const { advertsList, advertStatus, advertsListNextLink } = useSelector(
    (state) => state.adverts
  );
  useEffect(() => {
    dispatch(fetchAdverts());
  }, []);
  useEffect(()=>{
    let x 
    x++
  },[advertsList])
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
        {advertsList
          ?.filter((product) => product.status === "active")
          ?.map((product, index) => (
            <ProductItem key={index}>
              <Product
                id={product?.id}
                name={product?.title}
                imgURL={product?.pictures[0]?.image_url}
                price={product?.price}
                product={product}
                index={index}
              />
            </ProductItem>
          ))}
        {advertStatus === "loading" &&
          DUMMY_PRODUCTS.map((_item, i) => (
            <ProductItem key={i}>
              <Skeleton variant="rounded" width={"100%"} height={200} />
              <Skeleton variant="rounded" width={"40%"} height={10} />
              <Skeleton variant="rounded" width={"20%"} height={10} />
              <Skeleton variant="rounded" width={"100%"} height={46} />
            </ProductItem>
          ))}

        {advertStatus !== "loading" && advertsList.length === 0 ? (
          <div className="emptyAd">
            <img src={TrashImg} alt="error" />
            <h1>Oops!</h1>
            <p>There are no adverts here</p>
          </div>
        ) : null}
        {advertStatus !== "loading" &&
        advertsList.length != 0 &&
        advertsList.filter((product) => product.status === "active").length ===
          0 ? (
          <div className="emptyAd">
            <img src={TrashImg} alt="error" />
            <h1>Oops!</h1>
            <p>There are no adverts here</p>
          </div>
        ) : null}
      </ProductContainer>
      {advertsListNextLink && (
        <LoadMoreButton
          onClick={() => dispatch(loadMoreAdverts(advertsListNextLink))}
        >
          Load more
        </LoadMoreButton>
      )}
    </>
  );
};

export default TrendingProducts;
