import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const SettingsContainer = styled.div`
  max-width: 1440px;
  margin-top: 120px;

  h3.settingsMainHeading {
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

    p.settingDescription {
      font-size: 16px;
      color: ${Colors.neutral_color.color700};
    }

    div.settingsListContainer {
      display: flex;
      gap: 15px;
      border-bottom: 1px solid ${Colors.neutral_color.color200};
      padding-top: 20px;
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

const SettingButton = styled.button`
  font-size: 15px;
  color: ${({ isActive }) =>
    isActive ? Colors.primary_color.color400 : Colors.neutral_color.color700};
  padding-bottom: 10px;
  outline: none;
  border: none;
  background: none;
  display: flex;
  justify-content: left;
  position: relative;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "400")};

  &:before {
    content: "";
    border-bottom: ${({ isActive }) =>
      isActive ? `2px solid ${Colors.primary_color.color400}` : "none"};
    position: absolute;
    width: 100%; /* Make the line span the full width of the button */
    bottom: 0; /* Position the line at the bottom */
    left: 0; /* Center the line horizontally */
  }
`;

const PersonalDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4.headingText {
    color: ${Colors.neutral_color.color800};
    font-size: 17px;
  }

  div.itemContainer {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    border-bottom: 1px solid ${Colors.neutral_color.color100};
    padding-bottom: 50px;

    .locationContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      label {
        color: ${Colors.neutral_color.color900};
        font-weight: bold;
      }
    }

    div.inputContainer {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      div.stateCityContainer {
        display: flex;
        gap: 30px;

        .locationContainer {
          select {
            border: none;
            height: 50px;
            border: 1px solid ${Colors.neutral_color.color500};
            border-radius: 6px;
            color: ${Colors.neutral_color.color900};
          }
        }
      }
      input.textField {
        height: 100px;
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 6px;
        color: ${Colors.neutral_color.color900};
        padding: 10px;
      }
      textArea.textField {
        height: 100px;
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 6px;
        color: ${Colors.neutral_color.color900};
        padding: 10px;
      }
    }

    div.profileWrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 70%;

      img.profileImage {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid ${Colors.primary_color.color100};
      }

      div.photoActions {
        display: flex;
        gap: 10px;
        button {
          outline: none;
          background: none;
          border: none;
          font-size: 13px;
        }
        button.removePhotoAction {
          color: ${Colors.error_color.color500};
        }
        label.changePhotoAction {
          font-size: 13px;
          color: ${Colors.neutral_color.color600};
        }
        input.imageInput {
          display: none;
        }
      }
    }
  }

  div.formActionButtons {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    padding-top: 20px;

    button {
      outline: none;
      border: none;
      background: none;
      height: 50px;
      padding: 20px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button.cancelChanges {
      border: 2px solid ${Colors.neutral_color.color900};
    }
    button.saveChanges {
      background-color: ${Colors.primary_color.color500};
      color: ${Colors.white};
    }
  }

  @media (max-width: 780px) {
    div.itemContainer {
      flex-direction: column;
      border-bottom: 1px solid ${Colors.neutral_color.color500};
      gap: 20px;
      div.inputContainer {
        width: 100%;
      }

      div.profileWrapper {
        width: 100%;
      }
    }
  }
`;

const BusinessInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4.headingText {
    color: ${Colors.neutral_color.color800};
    font-size: 17px;
  }

  div.itemContainer {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    border-bottom: 1px solid ${Colors.neutral_color.color100};
    padding-bottom: 50px;

    div.captionContainer {
      display: flex;
      gap: 20px;
      flex-direction: column;
      p.cationText {
        width: 60%;
        font-size: 13px;
        color: ${Colors.neutral_color.color800};
        line-height: 17px;
      }
    }

    label {
      color: ${Colors.neutral_color.color900};
      font-weight: bold;
    }

    .locationContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }

    div.inputContainer {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      input.textField {
        height: 100px;
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 6px;
        color: ${Colors.neutral_color.color900};
        padding: 10px;
      }

      textarea.textField {
        height: 100px;
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 6px;
        color: ${Colors.neutral_color.color900};
        padding: 10px;
      }

      input.businessName {
        height: 50px;
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 6px;
        color: ${Colors.neutral_color.color900};
        padding: 10px;
      }

      div.stateCityContainer {
        display: flex;
        gap: 30px;

        .locationContainer {
          select {
            border: none;
            height: 50px;
            border: 1px solid ${Colors.neutral_color.color500};
            border-radius: 6px;
            color: ${Colors.neutral_color.color900};
          }
        }
      }
    }
  }

  div.formActionButtons {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    padding-top: 20px;

    button {
      outline: none;
      border: none;
      background: none;
      height: 50px;
      padding: 20px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button.cancelChanges {
      border: 2px solid ${Colors.neutral_color.color900};
    }
    button.saveChanges {
      background-color: ${Colors.primary_color.color500};
      color: ${Colors.white};
    }
  }

  @media (max-width: 780px) {
    div.itemContainer {
      flex-direction: column;
      border-bottom: 1px solid ${Colors.neutral_color.color500};
      gap: 20px;

      div.captionContainer {
        p.cationText {
          width: 100%;
        }
      }

      div.inputContainer {
        width: 100%;
      }
    }
  }
`;

const SecurityContainer = styled(PersonalDetailsContainer)`
  div.captionContainer {
    display: flex;
    gap: 20px;
    flex-direction: column;
    p.cationText {
      width: 60%;
      font-size: 13px;
      color: ${Colors.neutral_color.color800};
      line-height: 17px;
    }
  }
  select {
    border: none;
    height: 50px;
    border: 1px solid ${Colors.neutral_color.color500};
    border-radius: 6px;
    color: ${Colors.neutral_color.color900};
  }

  div.formActionButtons {
    button.deleteAccount {
      background-color: ${Colors.error_color.color500};
      color: ${Colors.white};
    }
  }
`;

export {
  BusinessInfoContainer,
  PersonalDetailsContainer,
  SecurityContainer,
  SettingButton,
  SettingsContainer,
};
