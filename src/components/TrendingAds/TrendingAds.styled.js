import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const Div = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-top: 45px;
margin-bottom: 15px;

span {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${Colors.neutral_color.color900};
}



}
`;

export const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;

  div.emptyAd {
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${Colors.neutral_color.color700};

    img {
      width: 80px;
      height: 80px;
    }
    h1 {
      color: ${Colors.neutral_color.color900};
      font-size: 20px;
    }
    p {
      color: ${Colors.neutral_color.color900};
      font-size: 16px;
    }
  }

  @media screen and (max-width: 900px) {
    flex: 1;
  }
  @media screen and (max-width: 640px) {
    flex: 1;
    flex-wrap: wrap;
  }
`;

export const ProductItem = styled.div`
  padding: 11px;
  background: ${Colors.gray};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  flex-basis: calc(25% - 0px);
  

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > div {
      & > img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 3px;
      }
    }
  }

  & > div::second-child {
    display: flex;
    background: black;
  }

  .product-list {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  .product-list1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: ${Colors.neutral_color.color900};
    }
  }

  .product-list2 {
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 24px;
      color: ${Colors.success_color.color500};
    }
  }

  button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
    opacity: 0.45;
    border: 1px solid ${Colors.neutral_color.color900};
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    flex-basis: calc(40% - 0px);

    & > div {
      display: flex;
      flex-direction: column;

      & > div {
        & > img {
          width: 100%;
          height: 80px;
          object-fit: cover;
          border-radius: 3px;
        }
      }
    }

    button {
      display: flex;

      padding: 10px;

      border: 1px solid ${Colors.neutral_color.color900};
      border-radius: 4px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-top: auto;
    }
  }

  @media (max-width: 500px) {
    flex-basis: calc(40% - 0px);
    button {
      display: flex;

      padding: 10px;

      border: 1px solid ${Colors.neutral_color.color900};
      border-radius: 4px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-top: auto;
      align-self: center;
      
    }
  }
`;
