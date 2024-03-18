import React, { useEffect } from "react";
import Product from "./Investment-ads";
import image1 from "./investmentAds-images/image1.png";
import image2 from "./investmentAds-images/image2.png";
import image3 from "./investmentAds-images/image3.png";
import { ProductItem, ProductContainer, Div } from "./investmentAds.styled";
import { useDispatch, useSelector } from "react-redux";
import {  fetchInvestmentAdverts } from "../../features/advertSlice";
import TrashImg from "../../assets/images/CharcoDeleteTrash.png";
import { Skeleton } from "@mui/material";
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
];
const InvestmentAds = () => {
  const dispatch = useDispatch();
  const { investmentAdList, investmentAdStatus, advertsListNextLink } =
    useSelector((state) => state.adverts);

  useEffect(() => {
    dispatch(fetchInvestmentAdverts());
  }, []);

  useEffect(() => {
    let x;
    x++;
  }, [investmentAdList]);

 
  return (
    <>
      {" "}
      <Div>
        <span>Investments Ads</span>
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
        {investmentAdList
          ?.filter((product) => product.status === "active")
          ?.map((product, index) => (
            <ProductItem key={index}>
              <Product
                id={product?.id}
                name={product?.title}
                imgURL={product?.advert_image_url}
                price={product?.current_price}
                product={product}
                index={index}
              />
            </ProductItem>
          ))}
        {investmentAdStatus === "loading" &&
          DUMMY_PRODUCTS.map((_item, i) => (
            <ProductItem key={i}>
              <Skeleton variant="rounded" width={"100%"} height={200} />
              <Skeleton variant="rounded" width={"40%"} height={10} />
              <Skeleton variant="rounded" width={"20%"} height={10} />
              <Skeleton variant="rounded" width={"100%"} height={46} />
            </ProductItem>
          ))}

        {investmentAdStatus !== "loading" && investmentAdList?.length === 0 ? (
          <div className="emptyAd">
            <img src={TrashImg} alt="error" />
            <h1>Oops!</h1>
            <p>There are no adverts here</p>
          </div>
        ) : null}
        {investmentAdStatus !== "loading" &&
        investmentAdList?.length != 0 &&
        investmentAdList?.filter((product) => product.status === "active")
          ?.length === 0 ? (
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

export default InvestmentAds;
