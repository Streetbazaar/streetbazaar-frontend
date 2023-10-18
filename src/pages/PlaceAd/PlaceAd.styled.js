import styled from "styled-components";
import { Colors } from "../../utils/colors";

const PlaceAdContainer = styled.div`
  margin-top: 100px;
  max-width: 1440px;
  width: 100%;
  button.goBack {
    display: flex;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 20px;
    color: ${Colors.neutral_color.color900};
    transition: all ease 1s;
  }
`;

const PlaceAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  width: 100%;

  div.headingContainer {
    text-align: center;
    h3.postAdHeading {
      color: ${Colors.neutral_color.color900};
      font-size: 20px;
      margin-bottom: 10px;
    }

    p.postAdCaptionText {
      color: ${Colors.neutral_color.color900};
      font-size: 15px;
    }
  }
`;

const StepsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StepItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StepNumber = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) =>
    isActive ? Colors.primary_color.color100 : Colors.neutral_color.color100};
  border-radius: 40px;
  color: ${({ isActive }) =>
    isActive ? Colors.primary_color.color500 : Colors.neutral_color.color900};
  font-weight: bold;
  transition: all ease 1s;
`;

const StepLabel = styled.div`
  color: ${({ isActive }) =>
    isActive ? Colors.primary_color.color500 : Colors.neutral_color.color900};
  font-weight: bold;
  transition: all ease 1s;
  font-size: 12px;
`;

const StepLine = styled.div`
  width: 25%;
  height: 4px;
  border-radius: 10px;
  background-color: ${Colors.primary_color.color500};
  transition: all ease 1s;
`;

const AdContainer = styled.div`
  width: 50%;
  background-color: ${Colors.neutral_color.color100};
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${Colors.neutral_color.color900};
  display: flex;
  flex-direction: column;
  gap: 20px;

  div.inputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      color: ${Colors.neutral_color.color900};
      font-weight: bold;
      font-size: 13px;


      span.subText {
        color: ${Colors.neutral_color.color600};
      font-weight: 400;
      font-size: 10px;
      }
    }

    input {
      outline: none;
      border: none;
      background: none;
      background-color: ${Colors.white};
      padding: 20px;
      color: ${Colors.neutral_color.color900};
      width: 100%;
      border: 1px solid ${Colors.neutral_color.color700};
      border-radius: 7px;
    }

    input.addressInput {
      padding-bottom: 50px;
    }
    input.descriptionInput {
      padding-bottom: 50px;
    }
    select {
      outline: none;
      border: none;
      background: none;
      background-color: ${Colors.white};
      padding: 20px;
      color: ${Colors.neutral_color.color900};
      width: 100%;
      border: 1px solid ${Colors.neutral_color.color700};
      border-radius: 7px;
    }
  }
  div.radioWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      color: ${Colors.neutral_color.color900};
      font-weight: bold;
      font-size: 13px;
    }

    div.radioGroup {
        display: flex;
        gap: 10px;
        span.radioContainer {
            display: flex;
            gap: 10px;
            label {
                font-weight: 400;
            }
        }
    }

  }
  div.locationWrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div.inputContainer {
      width: 100%;
    }
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;
export {
  AdContainer,
  PlaceAdContainer,
  PlaceAdWrapper,
  StepItem,
  StepLabel,
  StepLine,
  StepNumber,
  StepsContainer,
};
