import styled from "styled-components";
import { Colors } from "../../utils/colors";

const SideBarContainer = styled.div`
  background-color: #FAFBFC;
  height: 100vh;
  width: 300px;
  padding: 50px;
  padding-top: 150px;
  position: fixed;
  margin-right: 2000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  div.userProfile {
    display: flex;
    gap: 10px;
    align-items: center;

    div.imageWrapper {
      height: 60px;
      width: 60px;
      border-radius: 60px;
      border: 2px solid ${Colors.primary_color.color100};
      display: flex;
      align-items: center;
      justify-content: center;


      img {
          height: 50px;
          width: 50px;
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

  div.listItems {
    display: flex;
    flex-direction: column;
    gap: 50px;
   
   
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

const SideBarListItem = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: ${Colors.neutral_color.color400};
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: ${({isActive})=> isActive ? Colors.primary_color.color400 : Colors.neutral_color.color400};
  background-color: ${({isActive})=> isActive ? Colors.primary_color.color100 : "none"};
  padding: 15px;
  cursor: pointer;
`;

export { SideBarContainer, SideBarListItem };
