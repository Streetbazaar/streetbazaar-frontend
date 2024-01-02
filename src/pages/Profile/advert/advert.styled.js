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

    div.mobileFilters {
      display: none;
    }

    div.buttonFilterList {
      display: flex;
      gap: 15px;
    }

    div.advertsList {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }

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

  @media (max-width: 780px) {
    width: 100%;
    height: 100dvh;
    div.deskFilters {
      display: none;
    }
    div.contentContainer {
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
  text-transform: capitalize;
  color: ${({ isActive }) =>
    isActive ? Colors.primary_color.color400 : Colors.neutral_color.color400};
  background-color: ${({ isActive }) =>
    isActive ? Colors.primary_color.color100 : "none"};
  padding: 10px;
  border: ${({ isActive }) =>
    isActive ? `1px solid ${Colors.primary_color.color400}` : "none"};
  border-radius: 6px;

  @media (max-width: 780px) {
    gap: 5px;
    font-size: 10px;
    padding: 10px;
  }
`;

const AdvertItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  border-radius: 8px;
  width: 320px;
  height: fit-content;
  padding: 20px;
  gap: 15px;
  border: 1px solid ${Colors.neutral_color.color200};

  img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
  }

  div.adCaptions {
    display: flex;
    align-items: center;
    h4 {
      color: ${Colors.neutral_color.color600};
      flex: 1;
      font-size: 20px;
    }
    div.statusIndicator {
      background-color: ${Colors.success_color.color100};
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 10px;
      height: 20px;
      border-radius: 10px;

      p {
        color: ${Colors.success_color.color400};
        font-size: 10px;
        text-transform: capitalize;
      }
    }
  }

  div.adStatistics {
    display: flex;
    gap: 15px;

    div.statContainer {
      background-color: ${Colors.neutral_color.color100};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      border-radius: 8px;
      border: 1px solid ${Colors.neutral_color.color200};
      width: 30%;

      p {
        color: ${Colors.neutral_color.color800};
        font-size: 10px;
      }
    }
  }

  h3.adPrice {
    color: ${Colors.success_color.color500};
    font-size: 20px;
    border-bottom: 1px solid ${Colors.neutral_color.color200};
    padding-bottom: 15px;
  }

  div.adActions {
    display: flex;
    gap: 15px;

    button {
      background: none;
      border: none;
      outline: none;
      color: ${Colors.neutral_color.color500};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid ${Colors.neutral_color.color200};
      width: 30%;
      cursor: pointer;
    }
  }

  @media (max-width: 780px) {
    width: 100%;
    height: fit-content;
  }
`;

export { AdvertContainer, AdvertItemWrapper, AdvertSelect, ButtonFilter };
