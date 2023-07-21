import styled from "styled-components";
import { Colors } from "../../utils/colors";

const SideBarContainer = styled.div`
  background-color: #FAFBFC;
  height: 100%;
  width: 300px;
  padding: 50px;
  padding-top: 150px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  div.userProfile {
    display: flex;
    gap: 10px;
    align-items: center;

    img {
        height: 50px;
        width: 50px;
    }

    h3 {
        font-size: 16px;
        font-weight: 400;
        color: ${Colors.neutral_color.color700};
        text-transform: capitalize;
    }
  }

  div.listItems {
    display: flex;
    flex-direction: column;
    gap: 50px;
    a {
      text-decoration: none;
      font-size: 15px;
      color: ${Colors.neutral_color.color400};
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      &:hover {
        background-color: ${Colors.primary_color.color100}
        color: ${Colors.primary_color.color300}
      }
      &:active {
        background-color: ${Colors.primary_color.color100}
        color: ${Colors.primary_color.color300}
      }
    }
   
    button {
      outline: none;
      border: none;
      background: none;
      display: flex;
      flex-direction: row;
      color: red;
      gap: 10px;
      font-size: 15px;
      align-items: center;
    }
  }

  @media(max-width: 780px) {
    display: none;
  }
`;

export { SideBarContainer };
