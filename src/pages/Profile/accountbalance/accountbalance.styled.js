import styled from "styled-components";
import { Colors } from "../../../utils/colors";

const AccountBalanceContainer = styled.div`
  padding: 15px;
  max-width: 1440px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

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

  @media (max-width: 780px) {
    div.accountActionsContainer {
      div.actionBox {
        width: 190px;
        
      }
    }
  }
`;

export { AccountBalanceContainer };
