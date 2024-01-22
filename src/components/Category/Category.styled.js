import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const CategoryContainer = styled.div`
  margin-top: 13px;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  justify-content: flex-start;
`;

export const GridItem1 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
`;

export const GridItem2 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;

  @media screen and (max-width: 900px) {
    grid-column: 3 / span 2;
    grid-row: 1 / span 1;
  }
`;

export const GridItem3 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;

  @media screen and (max-width: 900px) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
  }
`;

export const GridItem4 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;

  @media screen and (max-width: 900px) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
`;

export const GridItem5 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 4 / span 1;
  grid-row: 2 / span 1;

  @media screen and (max-width: 900px) {
    grid-column: 3 / span 2;
    grid-row: 3 / span 1;
  }
`;

export const GridItem6 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 1 / span 2;
  grid-row: 3 / span 2;

  @media screen and (max-width: 900px) {
    grid-column: 1 / span 2;
    grid-row: 4 / span 2;
  }
`;

export const GridItem7 = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;

  @media screen and (max-width: 900px) {
    grid-column: 3 / span 2;
    grid-row: 4 / span 2;
  }
`;

export const Flex1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  height: 100%;
  width: 100%;
  padding: 13px 17px;
`;

export const Flex1Item1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 8px;
    line-height: 24px;
    color: ${Colors.neutral_color.color900};
  }

  p {
    font-size: 8px;
    color: ${Colors.neutral_color.color600};
  }
`;

export const Flex2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    width: 100%;
  }

    & > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;


     img {
      width: 100%;
      height: 100%;
      object-fit:cover
    }
  }

  @media screen and (max-width: 1230px){
     & > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;


     img {
      width: 100%;
      height: 100%;
      object-fit:cover
    }
  }

   @media screen and (max-width: 840px){
     & > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;


     img {
     width: 100%;
    height: 100%;
    object-fit:cover
  }
  }

   @media screen and (max-width: 550px){
     & > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;


     img {
   display: none
  }
  }

  }
`;

export const Flex2Item = styled.button`
  border-radius: 2.5px;
  font-size: 10px;
  border: 1px solid ${Colors.neutral_color.color400};
  background: transparent;
  color: ${Colors.neutral_color.color900};
  width: 60px;
  height: 30px;
  margin-left: 17px;
  margin-bottom: 17px;

  @media screen and (min-width: 900px) {
    width: 90px;
    height: 38px;

    &:hover {
      background: ${Colors.neutral_color.color400};
      color: white;
    }
  }

  &:hover {
    background: ${Colors.neutral_color.color400};
    color: white;
  }
`;

export const Flex2Item2 = styled.button`
  border-radius: 2.5px;
  font-size: 10px;
  border: 1px solid ${Colors.neutral_color.color400};
  background: transparent;
  color: ${Colors.neutral_color.color900};
  width: 60px;
  height: 30px;
  margin-left: 17px;
  margin-bottom: 17px;

  &:hover {
    background: ${Colors.neutral_color.color400};
    color: white;
  }
`;
