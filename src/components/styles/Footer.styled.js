import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyleFooter = styled.footer`
  background-color: ${Colors.neutral_color.color900};
  padding: 100px 120px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: 780px) {
    padding: 30px 30px;
  }
`;

export const EmailSubscribe = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  min-width: 300px;
  height: 230px;
  width: 100%;
  flex: 1;
  color: ${Colors.black};
  background: #ebf4fe;
  border-radius: 5px;

  @media screen and (max-width: 980px) {
    display: block;
    width: 100%;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 36px;

  & > h5 {
    color: ${Colors.neutral_color.color900};
    margin-bottom: 18px;
  }

  & > div {
    display: flex;

    & > div {
      width: 55px;
      height: 100%;
      background: ${Colors.primary_color.color500};
      border-radius: 0px 5px 5px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & > h6 {
    color: ${Colors.neutral_color.color900};
    margin-top: 27px;
    font-weight: 300;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid ${Colors.black};
  border-right: none;

  &::placeholder {
    font-weight: 300;
    color: ${Colors.neutral_color.color900};
    opacity: 0.5;
    font-size: 12px;
  }
`;

export const IconContainer = styled.div`
  border: 1px solid black;
  font-size: 20px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;
