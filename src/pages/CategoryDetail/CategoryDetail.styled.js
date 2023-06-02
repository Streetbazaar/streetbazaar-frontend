import styled from "styled-components";
import { Colors } from "../../utils/colors";

const CategoryDetailContainer = styled.div`
  background-color: ${Colors.neutral_color.color100};
  .navigationContainer {
    padding: 20px;
    display: flex;
    background-color: ${Colors.white};
    flex-direction: column;
    gap: 30px;

    .routeDetail {
      display: flex;
      align-items: center;
      a {
        font-size: 12px;
        text-decoration: none;
        color: ${Colors.neutral_color.color600};
      }

      p {
        color: ${Colors.neutral_color.color900};
        font-size: 12px;
      }
    }

    .backGroup {
      display: flex;
      align-items: center;
      font-size: 12px;
      text-decoration: none;
      color: ${Colors.neutral_color.color900};
      font-size: 12px;
    }
  }

  @media (max-width: 780px) {
    .navigationContainer {
      flex-direction: column-reverse;
    }
  }
`;

const ColoredDiv = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : Colors.darkPeach)};
  width: 100%;
  padding: 20px;
  margin-top: 100px;
  height: 100px;
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
    color: ${Colors.neutral_color.color900};
  }

  @media (max-width: 780px) {
    p {
      font-size: 15px;
    }
  }
`;

const FlexGroupContainer = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1440px;
  margin: 0 auto;

  .filterGroup {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 150px;
    padding-left: 20px;
    width: 80%;
  }

  .categoriesList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${Colors.white};
    border-radius: 10px;

    .headerGroup {
      border-bottom: 1px solid ${Colors.neutral_color.color100};
      padding: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      h3 {
        font-size: 15px;
      }

      .arrowLeft {
        width: 20px;
        height: 20px;
        margin-left: auto;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;
      list-style: none;
      padding: 10px;

      li {
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        p.catIcon {
          background-color: ${Colors.skyBlue};
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
        }

        p.catName {
          font-size: 13px;
        }

        p.catAmount {
          font-size: 9px;
          color: ${Colors.neutral_color.color300};
        }
      }
    }
  }
  .priceList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${Colors.white};
    border-radius: 10px;
    cursor: pointer;

    .headerGroup {
      border-bottom: 1px solid ${Colors.neutral_color.color100};
      padding: 10px;
      display: flex;
      align-items: center;
      h3 {
        font-size: 15px;
      }

      .arrowLeft {
        width: 20px;
        height: 20px;
        margin-left: auto;
      }
    }

    .inputContainer {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid ${Colors.neutral_color.color100};
      gap: 10px;

      input {
        height: 30px;
        outline: none;
        border: none;
        padding: 10px;
        border: 1px solid ${Colors.neutral_color.color100};
        border-radius: 5px;
        width: 120px;
      }
    }

    .priceRangeContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;
      border-bottom: 1px solid ${Colors.neutral_color.color100};
    }

    .buttonGroup {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      gap: 10px;
      padding: 10px;

      button {
        outline: none;
        border: none;
        background: none;

        :nth-child(1) {
          height: 40px;
          width: 70px;
          border: 2px solid ${Colors.neutral_color.color200};
          color: ${Colors.neutral_color.color500};
          border-radius: 10px;
        }
        :nth-child(2) {
          height: 40px;
          width: 70px;
          color: #fff;
          background-color: ${Colors.primary_color.color500};
          border-radius: 10px;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .categoriesList {
      display: none;
    }
    .filterGroup {
      display: none;
    }
    .priceList {
      display: none;
    }
  }
`;

const ProductFlexGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .filterButton {
    display: none;
  }

  .inputGroup {
    display: flex;
    width: 100%;
    input {
      width: 100%;
      padding-left: 50px;
      height: 50px;
      background-color: ${Colors.white};
    }
  }

  .selectGroup {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 10px;
  }

  @media (max-width: 780px) {
    .filterButton {
      display: flex;
      outline: none;
      border: none;
      background: none;
      align-items: center;
      font-size: 12px;
      color: ${Colors.neutral_color.color900};
      font-weight: bold;
      gap: 10px;
      flex: 1;
      img {
        width: 20px;
      }
    }
    .inputGroup {
      input {
        margin-left: auto;
        width: 60%;
        padding-left: 40px;
        font-size: 12px;
      }
      .SearchIconDiv {
        left: 80px;
      }

      
    }
    
    .selectGroup {
      display: none;
    }
  }
`;


const FilterModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  width: 80%;
  height: 600px;
  position: absolute;
  border-radius: 10px;
  top: 200px;
  right: 40px;

  .modalHeaderContainer {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid ${Colors.neutral_color.color200};
    align-items: center;

    .hearderGroupOne {
      flex: 1;
      gap: 10px;
      h3 {
        font-size: 18px;
        color: ${Colors.neutral_color.color900};
      }
      p {
        font-size: 15px;
        color: ${Colors.neutral_color.color800};
      }
    }

    .closeModal {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      background: none;
      color: ${Colors.neutral_color.color800};
    }
  }

  .categoriesList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${Colors.white};
    color: ${Colors.neutral_color.color900};

    .headerGroup {
      border-bottom: 1px solid ${Colors.neutral_color.color100};
      padding: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      h3 {
        font-size: 15px;
      }

      .arrowLeft {
        width: 20px;
        height: 20px;
        margin-left: auto;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;
      list-style: none;
      padding: 10px;

      li {
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        p.catIcon {
          background-color: ${Colors.skyBlue};
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
        }

        p.catName {
          font-size: 13px;
        }

        p.catAmount {
          font-size: 9px;
          color: ${Colors.neutral_color.color300};
        }
      }
    }
  }

  .priceList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${Colors.white};
    cursor: pointer;
    color: ${Colors.neutral_color.color900};

    .headerGroup {
      border-bottom: 1px solid ${Colors.neutral_color.color100};
      padding: 10px;
      display: flex;
      align-items: center;
      h3 {
        font-size: 15px;
      }

      .arrowLeft {
        width: 20px;
        height: 20px;
        margin-left: auto;
      }
    }

    .inputContainer {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid ${Colors.neutral_color.color100};
      gap: 10px;

      input {
        height: 30px;
        outline: none;
        border: none;
        padding: 10px;
        border: 1px solid ${Colors.neutral_color.color100};
        border-radius: 5px;
        width: 120px;
      }
    }

    .priceRangeContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;
      border-bottom: 1px solid ${Colors.neutral_color.color100};
    }

    .buttonGroup {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      gap: 10px;
      padding: 10px;

      button {
        outline: none;
        border: none;
        background: none;

        :nth-child(1) {
          height: 40px;
          width: 70px;
          border: 2px solid ${Colors.neutral_color.color200};
          color: ${Colors.neutral_color.color500};
          border-radius: 10px;
        }
        :nth-child(2) {
          height: 40px;
          width: 70px;
          color: #fff;
          background-color: ${Colors.primary_color.color500};
          border-radius: 10px;
        }
      }
    }
  }

  .selectGroup {
    color: ${Colors.neutral_color.color900};
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 10px;
    padding: 20px;

    select {
      border: 1px solid ${Colors.neutral_color.color900};
      width: 70%;
    }
  }

`

const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    margin: 0 auto;
  }
`;

const CustomSelect = styled.select`
  outline: none;
  background: none;
  border: none;
  border: 1px solid #000;
  height: 50px;
  padding: 0 20px;
  background-color: ${Colors.white};
  border-radius: 8px;
`;

export {
  ColoredDiv,
  ProductContainer,
  FlexGroupContainer,
  ProductFlexGroup,
  CustomSelect,
  CategoryDetailContainer,
  FilterModalBox
};
