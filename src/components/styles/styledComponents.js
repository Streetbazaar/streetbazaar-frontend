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

const NavContainer = styled.nav`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  align-items: center;
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
  gap: 10px;r
  border-radius: 2px;
  padding: 12px;
  align-items: center;
  color: ${Colors.neutral_color.color900};
`;

const PrimaryBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  background-color: ${Colors.primary_color.color500};
  display: flex;
  gap: 10px;
  border-radius: 2px;
  padding: 12px;
  align-items: center;
  color: ${Colors.white};
  justify-content: center;
  width: ${(props) => (props.width ? props.width : 10)}%;
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

export {
  DivContainer,
  HeaderContainer,
  LgCaCtaBtn,
  PrimaryBtn,
  StyledLinks,
  StyledInput,
  SearchInput,
  MainText,
  NavContainer,
  DeskNavDiv,
  HamburgerBar,
  HamburgerContainer,
  openAnimation,
  closeAnimation,
  MenuListContainer,
  MenuListItem,
  SearchIconDiv,
  MainContainer
};
