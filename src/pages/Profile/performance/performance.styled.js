import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const CustomDateInput = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.neutral_color.color500};
  border-radius: 2px;
  color: ${Colors.neutral_color.color700};
  outline: none;
  background: none;
  background-color: ${Colors.white};

  @media (max-width: 780px) {
    &::before {
      content: "Choose date range";
      position: absolute;
      pointer-events: none;
      color: #888;
      display: ${(props) => (props.value ? "none" : "flex")};
      transition: opacity 0.3s ease;
    }
  }
`;

const PerformanceContainer = styled.div`
  
  max-width: 1440px;
  margin-top: 120px;

  h3.performanceMainHeading {
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
    div.filterGroup {
      display: flex;
      gap: 20px;

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

      ${CustomDateInput} {
        height: 50px;
        width: 180px;
      }
    }
    div.performanceOverviewHeading {
      display: flex;
      align-items: center;

      h4.title {
        font-size: 18px;
        color: ${Colors.primary_color.color400};
        border-bottom: 1px solid ${Colors.neutral_color.color100};
        width: 100%;
        padding-bottom: 10px;
        &:before {
          content: "";
          border-bottom: 2px solid ${Colors.primary_color.color400};
          position: absolute;
          width: 90px;
          height: 31px;
        }
      }
    }

    div.performanceDetailsContainer {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }

  @media(max-width: 780px) {
    div.contentContainer {
      background-color: ${Colors.neutral_color.color100};
      div.userProfile {
        display: flex;
      }
    }
  }
`;

const PerformanceDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 250px;
  height: 200px;
  border: 1px solid ${Colors.neutral_color.color200};
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${Colors.white};

  div.headingContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4.titleText {
      font-size: 17px;
      color: ${Colors.neutral_color.color900};
    }

    select {
      border: none;
      font-size: 15px;
      font-weight: 400;
      color: ${Colors.neutral_color.color900};
      outline: none;
      width: 70%;
      background: none;
    }
  }

  div.analyticsContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4.viewsText {
      font-size: 19px;
      color: ${Colors.primary_color.color500};
    }
    p.percentageText {
      font-size: 15px;
      color: ${Colors.primary_color.color400};
    }
  }

  @media (max-width: 780px) {
    width: 45%;
    height: 180px;

    div.headingContainer {
      h4.titleText {
        font-size: 15px;
      }

      select {
        width: 100%;
        font-size: 10px;
      }
    }

    div.analyticsContainer {
      h4.viewsText {
        font-size: 17px;
      }
      p.percentageText {
        font-size: 10px;
      }
    }
  }
`;

export { CustomDateInput, PerformanceContainer, PerformanceDetailsBox };
