import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const PerformanceContainer = styled.div`
  padding: 15px;
  max-width: 1440px;
  margin-top: 120px;

  h3.performanceMainHeading {
    padding: 20px;
    color: ${Colors.neutral_color.color900};
  }

  div.filterGroup {
    padding: 20px;
    display: flex;
    gap: 20px;

    select {
      height: 50px;
      width: 100px;
      padding: 10px;
      border: 1px solid ${Colors.neutral_color.color500};
      border-radius: 2px;
      color: ${Colors.neutral_color.color700};
    }

    input.dateInput {
      height: 50px;
      width: 150px;
      padding: 10px;
      border: 1px solid ${Colors.neutral_color.color500};
      border-radius: 2px;
      color: ${Colors.neutral_color.color700};
    }
  }
  div.performanceOverviewHeading {
    display: flex;
    align-items: center;
    padding: 20px;

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
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

const PerformanceDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 250px;
  height: 200px;
  border: 1px solid ${Colors.neutral_color.color100};
  justify-content: space-between;

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

export { PerformanceContainer, PerformanceDetailsBox };
