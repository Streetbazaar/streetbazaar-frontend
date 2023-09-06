import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const FeedBackContainer = styled.div`
  max-width: 1440px;
  margin-top: 120px;

  h3.feedbackMainHeading {
    padding: 20px;
    color: ${Colors.neutral_color.color900};
  }

  div.contentContainer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div.userProfile {
      display: none;
      margin-top: 20px;
      gap: 10px;
      align-items: center;

      div.imageWrapper {
        display: flex;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        border: 2px solid ${Colors.primary_color.color200};
        align-items: center;
        justify-content: center;

        img {
          height: 40px;
          width: 40px;
          border-radius: 50px;
        }
      }

      h3 {
        font-size: 16px;
        font-weight: 400;
        color: ${Colors.neutral_color.color700};
        text-transform: capitalize;
      }
    }

    div.buttonFilterList {
      display: flex;
      gap: 20px;
    }

    div.feedbackWrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  @media (max-width: 780px) {
    div.contentContainer {
      background-color: ${Colors.neutral_color.color100};
      div.userProfile {
        display: flex;
      }
    }
  }
`;

const FeedBackItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border: 1px solid ${Colors.neutral_color.color200};
  width: 350px;
  height: auto;
  border-radius: 8px;
  justify-content: center;

  img.userPhoto {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  h4.userName {
    font-size: 19px;
    color: ${Colors.neutral_color.color900};
  }

  div.dateTimeWrapper {
    display: flex;
    gap: 5px;
    align-items: center;
    color: ${Colors.neutral_color.color600};
    font-size: 12px;
  }

  h3.productName {
    color: ${Colors.neutral_color.color900};
    font-size: 16px;
  }

  article.productComment {
    font-size: 12px;
    line-height: 17px;
    color: ${Colors.neutral_color.color800};
  }

  div.productImagesWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    img.productImage {
      width: 35px;
      height: 35px;
    }
  }

  div.ratingWrapper {
    display: flex;
    gap: 10px;
    align-items: center;

    div.starRating {
      display: flex;
      gap: 4px;
    }
    p.ratingText {
      color: ${Colors.neutral_color.color800};
      font-size: 12px;
    }
  }

  @media(max-width: 780px) {
    width: 47%;
    height: auto;
    background-color: ${Colors.white};

    div.dateTimeWrapper { 
        font-size: 10px;
        gap: 2px;
    }

    article.productComment { 
        font-size: 10px;
    }

    div.productImagesWrapper {
      
    
        img.productImage {
          width: 30px;
          height: 30px;
        }
      }

    div.ratingWrapper {
    
        div.starRating {
          display: none;
          
        }
        p.ratingText {
         
          font-size: 10px;
        }
      }
  }
`;

export { FeedBackContainer, FeedBackItem };
