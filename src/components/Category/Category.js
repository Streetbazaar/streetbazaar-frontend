import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "../../App.css";
import { Colors } from "../../utils/colors";
import {
  CategoryContainer,

  CategoryWrapper,

  Flex1,
  Flex1Item1,
  Flex2,
  Flex2Item,
  Flex2Item2,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  GridItem7
} from "./Category.styled";
import { Link } from "react-router-dom";


const getRandomColor = () => {
  const colorArray = [
    Colors.primary_color.color100,
    Colors.secondary_color.color100,
    Colors.success_color.color100,
    Colors.warning_color.color100,
    Colors.error_color.color100,
    Colors.neutral_color.color100,
    Colors.white,
    Colors.lightPeach,
    Colors.darkPeach,
    Colors.skyBlue,
    Colors.gray,
    Colors.unknown,
    Colors.unknown2,
    
  ];

  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
};

const CategoryItem = styled.div`
  padding: 20px;
  background: ${Colors.white};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200px;
  border: 1px solid ${Colors.secondary_color.color100};
  background: ${getRandomColor};
  flex-basis: calc(30% - 0px);
  flex-grow: 1;

  h2.catTitle {
    color: ${Colors.neutral_color.color900};
    font-size: 20px;
  }

  p {
    color: ${Colors.neutral_color.color700};
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: ${Colors.neutral_color.color700};
    margin-top: auto;
    border: 1px solid ${Colors.secondary_color.color100};
    width: fit-content;
    padding: 10px;
    border-radius: 7px;
  }

  @media (max-width: 768px) {
    height: fit-content;
    flex-basis: calc(30% / 0px);
    flex-grow: 1;
    flex-shrink: 0;

  }
`;


export default function Category() {
  const {categoriesList} = useSelector(state=> state.adverts)
  
  return (
    <CategoryContainer>
      <h2
        style={{
          color: Colors.neutral_color.color900,
          fontSize: "13px",
          marginBottom: "12px",
          fontWeight: "600",
        }}
      >
        Categories
      </h2>

      <CategoryWrapper>
        {categoriesList.map((cat, i) => (
          <CategoryItem key={cat.id}>
            <h2 className="catTitle">{cat.title}</h2>
            <p>{cat.adverts_count} Products</p>
            <Link to={`category-detail/${cat.title}/${cat.id}`}>
              Buy Now
            </Link>
          </CategoryItem>
        ))}
              </CategoryWrapper>
    </CategoryContainer>
  );
}
