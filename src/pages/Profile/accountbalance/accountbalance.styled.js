import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const AccountBalanceContainer = styled.div`

  max-width: 1440px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3.accountBalanceHeading {
    padding: 20px;
    color: ${Colors.neutral_color.color900};
  }

  div.contentContainer {
    display: flex;
    flex-direction: column;
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
    div.accountActionsContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;

      div.actionBox {
        width: 250px;
        height: 250px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        border: 1px solid ${Colors.neutral_color.color800};
        border-radius: 3px;
        background-color: ${Colors.white};

        div.iconContainer {
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          border-radius: 3px;
        }
        div.iconContainer.balance {
          border: 1px solid ${Colors.success_color.color500};
          background-color: ${Colors.success_color.color100};
          color: ${Colors.success_color.color500};
        }
        div.iconContainer.topup {
          border: 1px solid ${Colors.secondary_color.color500};
          background-color: ${Colors.secondary_color.color100};
          color: ${Colors.secondary_color.color500};
        }
        div.iconContainer.withdraw {
          border: 1px solid ${Colors.error_color.color500};
          background-color: ${Colors.error_color.color100};
          color: ${Colors.error_color.color500};
        }
        h4.actionTitle {
          font-size: 17px;
          color: ${Colors.neutral_color.color900};
          font-weight: 400;
        }
        h3.balanceField {
          font-size: 20px;
          color: ${Colors.success_color.color500};
        }
        button.actionButton {
          background: none;
          border: none;
          outline: none;
          color: ${Colors.neutral_color.color700};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          height: 30px;
          border-radius: 5px;
          border: 1px solid ${Colors.neutral_color.color200};
        }

        a {
          color: ${Colors.primary_color.color400};
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 780px) {
    div.contentContainer {
      gap: 20px;
      background-color: ${Colors.neutral_color.color100};

      div.userProfile {
        display: flex;
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
      div.accountActionsContainer {
        div.actionBox {
          width: 45%;
        }
      }
    }
  }
`;

const PaymentModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  z-index: 1000; /* Make sure it's above other content */
`;

const PaymentModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  z-index: 1001; /* Make sure it's above the overlay */
  height: f200px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
  }

  .closeButton {
    position: absolute;
    top: 2px;
    right: 2px;
    outline: none;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    color: red;
    border-radius: 30px;
  }

  div {
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    button {
      outline: none;
      border: none;
      background: noen;
      display: flex;
      padding: 20px;
      border-radius: 7px;
    }

    button.deleteBtn {
      color: ${Colors.white};
      background-color: ${Colors.error_color.color500};

      &:disabled {
        opacity: 0.5;
      }
    }
    button.exitBtn {
      border: 1px solid ${Colors.neutral_color.color700};

      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;

export { AccountBalanceContainer, PaymentModalContent, PaymentModalOverlay };
