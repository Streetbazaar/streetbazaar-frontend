import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";
import { Colors } from "../../utils/colors";
import { CategoryContainer, CategoryWrapper } from "./Category.styled";

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
  height: 270px;
  border: 1px solid ${Colors.secondary_color.color100};
  background: ${Colors.white};
  flex-basis: calc(30% - 0px);
  flex-grow: 1;
  justify-content: center;

  h2.catTitle {
    color: ${Colors.neutral_color.color900};
    font-size: 16px;
  }

  img {
    width: 90px;
    height: 90px;
    object-fit: center;
    align-self: center;
    
  }

  p {
    color: ${Colors.neutral_color.color700};
    font-size: 9px;
  }

  a {
    text-decoration: none;
    color: ${Colors.neutral_color.color700};
    margin-top: auto;
    border: 1px solid ${Colors.secondary_color.color100};
    width: fit-content;
    padding: 10px;
    border-radius: 7px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    flex-basis: calc(30% - 0px);
    flex-grow: 1;
    flex-shrink: 0;
    height: 230px;

    img {
      width: 70px;
      height: 70px;
      object-fit: center;
    }

    h2.catTitle {
      color: ${Colors.neutral_color.color900};
      font-size: 10px;
    }

    p {
      color: ${Colors.neutral_color.color700};
      font-size: 6px;
    }
  }
`;

export default function Category() {
  const { categoriesList } = useSelector((state) => state.adverts);

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
            {cat.icon_url && <img src={cat?.icon_url} alt={cat.title} />}
            <Link to={`category-detail/${cat.title}/${cat.id}`}>Buy Now</Link>
          </CategoryItem>
        ))}
      </CategoryWrapper>
    </CategoryContainer>
  );
}
