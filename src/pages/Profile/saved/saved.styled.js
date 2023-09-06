import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const SavedContainer = styled.div`
  max-width: 1440px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3.savedMainHeading {
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

    div.filterContainer {
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${Colors.neutral_color.color700};
      margin-left: auto;

      select {
        height: 50px;
        width: 100px;
        padding: 10px;
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 2px;
        color: ${Colors.neutral_color.color700};
        outline: none;
        background: none;
        background-color: ${Colors.white};
      }
    }
  }

  div.savedAdsContainer {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
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

const SavedItem = styled.div`
  padding: 10px;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid ${Colors.neutral_color.color200};
  width: 280px;
  height: auto;
  border-radius: 8px;
  justify-content: center;
  position: relative;

  img.productPhoto {
    width: 100%;
    height: 200px;
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

  article.productDescription {
    font-size: 12px;
    line-height: 18px;
    color: ${Colors.neutral_color.color800};
  }

  button.showContactBtn {
    outline: none;
    border: none;
    background: none;
    color: ${Colors.neutral_color.color800};
    border: 2px solid ${Colors.neutral_color.color800};
    padding: 6px 0;
    border-radius: 6px;
  }

  button.removeAdBtn {
    outline: none;
    border: none;
    background: none;
    color: ${Colors.neutral_color.color800};
    background-color: ${Colors.neutral_color.color100};
    width: 30px;
    height: 30px;
    border-radius: 30px;
    font-size: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  @media(max-width: 780px) {
    width: 47%;

    div.dateTimeWrapper { 
        font-size: 10px;
        gap: 2px;
    }

    article.productDescription { 
        font-size: 10px;
    }
  }
`;

export { SavedContainer, SavedItem };
