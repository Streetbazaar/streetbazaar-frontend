import styled from "styled-components";
import { Colors } from "../../../utils/colors";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px auto;
  width: 38%;
  height: 565px;
  box-sizing: border-box;

  @media (max-width: 780px) {
    margin: 0px auto;
    width: 100%;
    left: 0;
    right: 0;
    position: absolute;
    margin-top: 200px;
    bottom: 0;
    height: 600px;
  }

  @media only screen and (min-width: 780px) and (max-width: 1200px) {
    width: 50%;
  }
`;

export const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
 border-radius: 5px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-sizing; border-box;
  

   @media ( max-width: 780px) {
    width: 100%;
  }

   @media only screen and (min-width: 780px) and (max-width: 1200px){
    width: 100%;
 }

`;

export const CreateAccountForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 0px 0px 5px 5px;
`;

export const Input = styled.input`
  border: none;
  background-color: ${Colors.white};
  padding: 17px 14px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${Colors.neutral_color.color600};

  &::placeholder {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: ${Colors.neutral_color.color400};
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 50px;
  background-color: ${({disabled})=>disabled ? Colors.primary_color.color300 : Colors.primary_color.color500};
  color: ${Colors.neutral_color.color100};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-top: 9px;
`;

export const Flex = styled.div`
  background-color: ${Colors.white};
  border-bottom: 1px solid ${Colors.neutral_color.color1000};
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px 5px 0px 0px;

  .create-account-title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: ${Colors.neutral_color.color900};
  }

  .cancel-create-account {
    font-weight: 500;
    display: flex;
    align-items: center;
    color: ${Colors.neutral_color.color600};
    border-radius: 2px;

    &:hover {
      background-color: ${Colors.neutral_color.color800};
    }
  }
`;

export const Flex2 = styled.div`
  background-color: ${Colors.white};
  width: 100%;
  height: 68px;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 5px;

  .create-account-with-google {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid ${Colors.neutral_color.color600};
    border-radius: 5px;
    flex-grow: 1;
    color: ${Colors.neutral_color.color900};
    cursor: pointer;

    &:hover {
      background-color: ${Colors.neutral_color.color300};
    }

    @media (max-width: 780px) {
      font-size: 11px;
    }

    @media only screen and (min-width: 780px) and (max-width: 1200px) {
      font-size: 12.5px;
    }
  }

  .create-account-with-facebook {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid ${Colors.neutral_color.color900};
    border-radius: 5px;
    flex-grow: 1;
    color: ${Colors.neutral_color.color900};

    &:hover {
      background-color: ${Colors.neutral_color.color300};
    }

    @media (max-width: 780px) {
      font-size: 11px;
    }

    @media only screen and (min-width: 780px) and (max-width: 1200px) {
      font-size: 12.5px;
    }
  }
`;

export const Flex3 = styled.div`
  background-color: tranparent;
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.neutral_color.color400};
  border-bottom: 1px solid ${Colors.neutral_color.color1000};
  margin-bottom: 20px;
  position: relative;

  .or {
    position: absolute;
    top: 50%;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 24px;
    background-color: ${Colors.white};
  }
`;

export const Flex4 = styled.div`
  background-color: tranparent;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  margin-top: 17px;

  .register-here {
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    color: ${Colors.primary_color.color500};
    opacity: 0.95;

    & > span {
      color: ${Colors.neutral_color.color500};
      font-weight: 400;
    }
  }
`;

export const Flex5 = styled.div`
  background-color: tranparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;

  .login {
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    color: ${Colors.primary_color.color500};
    opacity: 0.95;
    cursor: pointer;

    & > span {
      color: ${Colors.neutral_color.color500};
      font-weight: 400;
    }
  }
`;

export const Label = styled.label`
 
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  color: ${Colors.neutral_color.color900};
  align-self: stretch;
  flex-grow: 0;
`;
