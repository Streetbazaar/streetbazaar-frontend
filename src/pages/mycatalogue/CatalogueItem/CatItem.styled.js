import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const CatItemCard = styled.div`
  background-color: #f3f5f8;
  border-radius: 10px;
  height: fit-content;
  flex-basis: calc(50% / 2.1);
  padding: 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};

  img {
    width: 100%;
    align-self: center;
    justify-self: center;
    text-align: center;
    height: 150px;
    object-fit: cover;
    border-radius: 3px;
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
    flex-basis: calc(100% / 2.1);
    height: fit-content;
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

export { CatItemCard };
