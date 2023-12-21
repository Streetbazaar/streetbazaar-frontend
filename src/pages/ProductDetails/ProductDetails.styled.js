import styled from "styled-components";
import { Colors } from "../../utils/colors";

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  padding: 110px;

  @media (max-width: 780px) {
    padding: 20px;
    margin-top: 100px;
  }
`;

const ImageSliderContainer = styled.div`
  display: flex;
  gap: 30px;

  div.imagesWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
    div.mainImage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: ${Colors.neutral_color.color100};
      padding: 20px;
      border-radius: 3px;
      height: fit-content;
      width: 100%;
      padding: 20px;
  
      overflow: hidden;
    }

    div.imagesList {
      display: flex;
      gap: 10px;
      overflow-y: auto;
      background-color: ${Colors.neutral_color.color100};
      padding: 20px;
      border-radius: 3px;
      height: fit-content;
      width: fit-content;
      padding: 20px;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  div.productDetails {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1.mainHeading {
      color: ${Colors.neutral_color.color900};
      font-size: 27px;
      text-transform: capitalize;
    }

    div.dateLocationContainer {
      display: flex;
      align-items: center;

      div.detailsWrapper {
        display: flex;
        gap: 5px;
        font-size: 11px;
        text-align: center;

        span:nth-child(1) {
          font-weight: bold;
          color: ${Colors.neutral_color.color900};
        }
        span:nth-child(2) {
          color: ${Colors.neutral_color.color700};
        }
      }

      svg {
        font-size: 50px;
        color: ${Colors.neutral_color.color900};
      }
    }

    div.priceWrapper {
      display: flex;
      align-items: center;
      gap: 10px;

      h2 {
        color: ${Colors.primary_color.color500};
        font-size: 22px;
        text-transform: capitalize;
      }

      span {
        color: green;
        font-size: 12px;
        text-transform: capitalize;
      }
    }

  }

  div.ownerDetails {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div.ownerGroup {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h5 {
        color: ${Colors.neutral_color.color900};
        font-size: 15px;
        text-transform: capitalize;
      }
      
      p {
        color: ${Colors.neutral_color.color900};
        font-size: 15px;
        text-transform: capitalize;
      }
    }

    
  }

  div.buttonsGroup {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      outline: none;
      border: none;
      background: none;
    }

    button:nth-child(1) {
      color: ${Colors.white};
      background-color: ${Colors.primary_color.color500};
      padding: 20px;
      font-size: 15px;
      border-radius: 6px;

      &:hover {
        background-color: ${Colors.primary_color.color300};
      }

      &:disabled {
        background-color: ${Colors.primary_color.color200};
      }
    }
    button:nth-child(2) {
      color: ${Colors.neutral_color.color900};
      padding: 20px;
      font-size: 15px;
      border-radius: 6px;
      border: 2px solid ${Colors.neutral_color.color900};

      &:hover {
        background-color: ${Colors.neutral_color.color100};
      }
  
      &:disabled {
        border-color: ${Colors.neutral_color.color300};
        color: ${Colors.neutral_color.color300};
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 780px) {
    flex-direction: column;

    div.imagesWrapper {
      width: 100%;
    }
  }
`;

const MainImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 3px;
  height: 300px;
  // transform: translateX(
  //   ${(props) => props.translateSign * 100 * props.activeIndex}%
  // );
  // transition: transform 0.3s ease;
`;
const SingleImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;

  @media(max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export {
  ImageSliderContainer,
  MainImage,
  ProductDetailsContainer,
  SingleImage,
};
