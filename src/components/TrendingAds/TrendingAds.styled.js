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
  flex: 1 1 1 1;
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
  }

  @media screen and (max-width: 900px) {
    flex: 1 1 1;
  }
  @media screen and (max-width: 640px) {
    flex: 1 1 1;
  }
`;

export const ProductItem = styled.div`
  padding: 11px;
  background: ${Colors.gray};
  border-radius: 2px;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      height: 70%;
      width: 100%;
      object-fit: contain;

      & > img {
        width: 100%;
        height: 100%;
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
    margin-top: 5px;

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 24px;
      color: ${Colors.success_color.color500};
    }
  }

  button {
    box-sizing: border-box;
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
    margin-top: 15px;
  }

  @media(max-width: 768px) {
    width: 45%;
  }
`;
