import styled from "styled-components";
import { Colors } from "../../utils/colors";

const MyCatalogueContainer = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 100px;
  background-color: ${Colors.neutral_color.color100};
  gap: 20px;
  width: 100%;
  justify-content: center;
  
  

  div.ownerProfileDetail {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    

    div.profileWrapper {
      padding: 20px;
      border-radius: 20px;
      background-color: ${Colors.white};
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      

      div.profilePhoto {
        display: flex;
        width: 70px;
        height: 70px;
        border: 1px solid ${Colors.primary_color.color200};
        border-radius: 50px;
        align-items: center;
        justify-content: center;

        img {
          width: 60px;
          height: 60px;
          border-radius: 60px;
        }
      }

      h1.ownerName {
        display: flex;
        font-size: 20px;
        color: ${Colors.neutral_color.color700};
        text-align: center;
        flex-shrink: 1;
      }
    }

    div.contactDetail {
      padding: 20px;
      border-radius: 20px;
      background-color: ${Colors.white};
      display: flex;
      align-items: center;
      width: 100%;

      button {
        outline: none;
        border: none;
        background: none;
        background-color: ${Colors.primary_color.color500};
        color: ${Colors.white};
        width: 100%;
        padding: 15px;
        font-size: 15px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          background-color: ${Colors.primary_color.color600};
          transition: all ease 0.5s;
        }

        a {
          text-decoration: none;
          color: ${Colors.white};
          font-size: 15px;
        }
      }
    }
  }

  div.adContent {
    display: flex;
    gap: 10px;
    width: 70%;
    flex-flow: row wrap;
    justify-content: space-evenly;

    div.emptyAd {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      color: ${Colors.neutral_color.color700};

      img {
        width: 80px;
        height: 80px;
      }
    }
    

    @media (max-width: 900px) {
      width: 100%;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 797px) {
    flex-direction: column;
    div.ownerProfileDetail {
      width: 100%;
    }
  }
`;

export { MyCatalogueContainer };
