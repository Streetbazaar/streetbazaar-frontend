import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const AdvertSelect = styled.select`
  outline: none;
  background: none;
  border: none;
  border: 1px solid ${Colors.neutral_color.color300};
  height: 50px;
  padding: 0 20px;
  background-color: ${Colors.white};
  border-radius: 6px;
  color: ${Colors.neutral_color.color600};
`;

const AdvertContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin-top: 120px;
  h3.advertMainHeading {
    padding: 20px;
    color: ${Colors.neutral_color.color900};
  }

  div.deskFilters {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid ${Colors.neutral_color.color300};

    div.searchBar {
      position: relative;
      color: ${Colors.neutral_color.color400};
      flex: 1;

      input {
        height: 50px;
        padding-left: 40px;
        color: ${Colors.neutral_color.color400};
        outline: none;
        border: none;
        border: 1px solid ${Colors.neutral_color.color300};
        border-radius: 6px;
        width: 70%;
      }

      div.searchIcon {
        position: absolute;
        top: 15px;
        left: 15px;
      }
    }

    div.selectBar {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  div.contentContainer {
    padding: 20px;
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

    div.mobileFilters {
      display: none;
    }
    div.buttonFilterList {
        display: flex;
        gap: 15px;
        
       
    }
  }

  @media (max-width: 780px) {
    width: 100%;
    height: 100vh;
    div.deskFilters {
      display: none;
    }
    div.contentContainer {
      height: 100%;
      background-color: ${Colors.neutral_color.color100};
      gap: 10px;
      display: flex;
      flex-direction: column;
      div.userProfile {
        display: flex;
      }

      div.mobileFilters {
        display: flex;
        align-items: center;
     
        width: 100%;
    
        div.searchBar {
          position: relative;
          color: ${Colors.neutral_color.color400};
          flex: 1;
    
          input {
            height: 50px;
            padding-left: 35px;
            color: ${Colors.neutral_color.color400};
            outline: none;
            border: none;
            border: 1px solid ${Colors.neutral_color.color300};
            border-radius: 6px;
            width: 80%;
          }
    
          div.searchIcon {
            position: absolute;
            top: 15px;
            left: 10px;
          }
        }
    
        div.selectBar {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }
`;

const ButtonFilter = styled.button`
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  color: ${({isActive})=> isActive ? Colors.primary_color.color400 : Colors.neutral_color.color400};
  background-color: ${({isActive})=> isActive ? Colors.primary_color.color100 : "none"};
  padding: 10px;
  border: ${({isActive})=> isActive ? `1px solid ${Colors.primary_color.color400}` : "none"};
  border-radius: 6px;


  @media(max-width: 780px) {
    gap: 5px;
    font-size: 10px;
    padding: 10px;
  }
`

export { AdvertContainer, AdvertSelect, ButtonFilter };
