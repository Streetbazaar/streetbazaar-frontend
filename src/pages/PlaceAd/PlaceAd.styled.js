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
    p.picturesCaption {
      color: ${Colors.neutral_color.color900};
      font-size: 13px;
    }

    div.imageInputWrapper {
      background-color: ${Colors.white};
      border: 1px dashed ${Colors.neutral_color.color700};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 7px;
      flex-direction: column;
      gap: 20px;

      svg {
        font-size: 60px;
        color: ${Colors.neutral_color.color600};
      }
      p.inputDragCaption {
        font-size: 13px;
        color: ${Colors.neutral_color.color900};
        label {
          color: ${Colors.primary_color.color500};
        }
      }
      input {
        display: none;
      }
      
      ul {
        background-color: ${Colors.neutral_color.color100};
        padding: 30px;
        border-radius: 7px;
        color: ${Colors.neutral_color.color700};
        font-size: 12px;

      }
    }
  }

  div.selectedImagesContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div.captionContainer {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: ${Colors.primary_color.color100};
      padding: 15px;
      color: ${Colors.primary_color.color500};
      border-radius: 7px;

      svg {
        font-size: 30px;
      }
      p {
        font-size: 13px;
      }

    }

    div.imageContainer {
      width: 100%;
      padding: 10px;
      background-color: ${Colors.white};
      display: flex;
      justify-content: space-between;
      border-radius: 7px;

      div.imageWrapper {
        position: relative;
        img {
          height: 50px;
          width: 50px;
          border-radius: 7px;
        }
        p.numberCaption {
          position: absolute;
          top: -7px;
          right: -7px;
          background-color: ${Colors.primary_color.color100};
          color: ${Colors.primary_color.color500};
          font-size: 12px;
          height: 20px;
          width: 20px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      button {
        outline: none;
        border: none;
        background: none;
        font-size: 20px;
        color: ${Colors.neutral_color.color600}
      }
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

  button.nextButton {
    outline: none;
    border: none;
    background: none;
    background-color: ${Colors.primary_color.color500};
    color: ${Colors.white};
    border-radius: 7px;
    padding: 20px;
    width: 200px;
    align-self: flex-end;
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
