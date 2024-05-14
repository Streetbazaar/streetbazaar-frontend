// Contact.styles.js
import styled from 'styled-components';
import { Colors } from "../../utils/colors";


export const ContactContainer = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const Form = styled.form`
  width: 100%;
  padding-top: 70px;

`;

export const FormRow = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > div {
    flex: 1;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.input`
  width: 100%;
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InfoWrap = styled.div`
  background: #007bff;
  color: white;
  padding: 20px;
  border-radius: 4px;
`;


export const ContactHeader = styled.h1`
color: ${Colors.primary_color.color300};
font-size: 40px;
`;

