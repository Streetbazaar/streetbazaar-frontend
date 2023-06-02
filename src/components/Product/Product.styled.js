import styled from "styled-components";
import { Colors } from "../../utils/colors";

const ProductCard = styled.div`
  background-color: #f3f5f8;
  border-radius: 10px;
  height: 400px;
  width: 31.8%;
  padding: 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    align-self: center;
    justify-self: center;
    text-align: center;
  }

  .groupContainer {
    display: flex;
  }
  .productName {
    color: ${Colors.neutral_color.color900};
  }
  .amount {
    color: green;
  }
  .favouriteDiv {
    margin-left: auto;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${Colors.neutral_color.color900};
  }

  button {
    border: none;
    background: none;
    outline: none;
    border: 1px solid ${Colors.neutral_color.color400};
    height: 50px;
    width: 100%;
  }

  @media (max-width: 760px) {
    height: 250px;
    width: 45%;
    .productName {
      font-size: 14px;
    }
    .amount {
      font-size: 14px;
    }
    .favouriteDiv {
      height: 20px;
      width: 20px;
    }
    .favouriteIcon {
      color: ${Colors.neutral_color.color900};
      height: 15px;
      width: 15px;
    }
  }
`;

export { ProductCard };
