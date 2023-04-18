import styled from "styled-components";
import { Colors } from "../../utils/colors";

const DivContainer = styled.div`
  padding: 20px;
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
   max-width: 1450px
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
`;

const GridItem = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export {
  DivContainer,
  HeaderContainer,
  LgCaCtaBtn,
  PrimaryBtn,
  StyledLinks,
  StyledInput,
  GridItem,
};
