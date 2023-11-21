import styled, { css } from "styled-components";
import { Colors } from "../../utils/colors";

const DivContainer = styled.div`
  padding: 20px;
`;

const openAnimation = `
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-45deg) translate(-6px, 6px);
  }
`;

const closeAnimation = `
  0% {
    transform: rotate(-45deg) translate(-6px, 6px);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const DeskNavDiv = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;

const HamburgerBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease-in-out;
`;

const MenuListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #021f3b;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  padding-top: 40px;
  gap: 30px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0%);
    `}
`;

const MenuListItem = styled.li`
  padding: 10px;
  color: ${Colors.white};
`;

const HeaderContainer = styled.header`
  padding: 15px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 0 5px -2px var(--ash);
  background-color: ${Colors.white};
  z-index: 1;
  height: 100px;
  ${HamburgerContainer} {
    display: none;
  }
  ${MenuListContainer} {
    display: none;
  }

  @media (max-width: 780px) {
    ${DeskNavDiv} {
      display: none;
    }
    ${HamburgerContainer} {
      display: flex;
    }
    ${MenuListContainer} {
      display: flex;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 400px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: -2;
`;

const UserActionModal = styled.div`
  display: ${({ showUserActionModal }) =>
    showUserActionModal ? "flex" : "none"};
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  top: 80px;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.neutral_color.color400};
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  width: 190px;
  z-index: 20;

  a {
    text-decoration: none;
    color: ${Colors.neutral_color.color400};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    &:hover {
      color: ${Colors.neutral_color.color600};
    }
  }
  a.sellCTA {
    display: none;
  }
  button {
    outline: none;
    border: none;
    background: none;
    display: flex;
    flex-direction: row;
    color: red;
    gap: 10px;
  }

  @media (max-width: 780px) {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    height: 550px;
    margin-top: auto;
    border-radius: 15px 15px 0px 0px;
    gap: 30px;
    z-index: 23;

    a.sellCTA {
      background-color: ${Colors.primary_color.color500};
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: ${Colors.white};
      }
    }
  }
`;

const NavContainer = styled.nav`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .loggedInUser {
    display: flex;
    gap: 20px;
    .notificationIcon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${Colors.neutral_color.color200};
      color: ${Colors.neutral_color.color900};
      border-radius: 50px;
    }
    .messageIcon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      background-color: ${Colors.neutral_color.color200};
      color: ${Colors.neutral_color.color900};
    }

    .profileButton {
      
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      cursor: pointer;

      div.imageWrapper {
        height: 50px;
        width: 50px;
        border-radius: 60px;
        border: 2px solid ${Colors.primary_color.color100};
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 40px;
          width: 40px;
          border-radius: 50px;
        }
      }
    }
  }

  .loggedInUserMobile {
    display: none;
  }

  @media (max-width: 780px) {
    .loggedInUserMobile {
      display: flex;
      gap: 20px;

      div.imageWrapper {
        height: 40px;
        width: 40px;
        border-radius: 60px;
        border: 2px solid ${Colors.primary_color.color100};
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 35px;
          width: 35px;
          border-radius: 50px;
        }
      }

      .notificationIcon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Colors.neutral_color.color200};
        color: ${Colors.neutral_color.color900};
        border-radius: 40px;
      }
      .messageIcon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        background-color: ${Colors.neutral_color.color200};
        color: ${Colors.neutral_color.color900};
      }

      .profileButton {
        
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        cursor: pointer;
      }
    }
  }
`;

const MainText = styled.h1`
  color: ${Colors.neutral_color.color900};
  width: 50%;
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainContainer = styled.main`
  padding: 15px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 120px;
`;

const LgCaCtaBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  border: 1px solid ${Colors.neutral_color.color900};
  background-color: ${Colors.white};
  display: flex;
  gap: 10px;
  border-radius: 2px;
  padding: 12px;
  align-items: center;
  color: ${Colors.neutral_color.color900};
  width: 200%;
`;

const PrimaryBtn = styled.a`
  outline: none;
  border: none;
  background: none;
  text-decoration: none;
  background-color: ${Colors.primary_color.color500};
  display: flex;
  gap: 10px;
  border-radius: 2px;
  padding: 12px;
  align-items: center;
  color: ${Colors.white};
  justify-content: center;
  width: ${(props) => (props.width ? props.width : 150)}%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLinks = styled.a`
  text-decoration: none;
  color: ${Colors.neutral_color.color900};
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background: none;
  border: 1px solid ${Colors.neutral_color.color900};
  border-radius: 2px;
  padding: 10px;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.div`
    margin-bottom: 25px;
    position: relative;
    display: flex;
    gap: 10px;
    margin-top: 30px;

    @media (max-width: 768px) {
      
      flex-direction: column;
      
    }
  }}
`;

const SearchIconDiv = styled.div`
  position: absolute;
  bottom: 8px;
  left: 20px;

  @media (max-width: 768px) {
    top: 10px;
    left: 20px;
  }
`;

const ProfileOutletDiv = styled.div`
  margin-left: 300px;
  flex: 1;
  max-width: 1440px;
 

  @media(max-width: 780px) {
    margin-left: 0;
  }
`

export {
  DeskNavDiv,
  DivContainer,
  HamburgerBar,
  HamburgerContainer,
  HeaderContainer,
  LgCaCtaBtn,
  MainContainer,
  MainText,
  MenuListContainer,
  MenuListItem,
  NavContainer,
  Overlay,
  PrimaryBtn,
  SearchIconDiv,
  SearchInput,
  StyledInput,
  StyledLinks,
  UserActionModal,
  closeAnimation,
  openAnimation,
  ProfileOutletDiv
};
