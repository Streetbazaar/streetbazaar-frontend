// Contact.styles.js
import styled from 'styled-components';
import { Colors } from "../../utils/colors";
import { ColorLens } from '@mui/icons-material';


export const ContactContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  padding-bottom: 100px;
`;



export const ContactContainerHeroOne = styled.div`
  background-color: ${Colors.primary_color.color100};
  padding: 12% 100px;
  height:fit-content;
  width:100%;
  display: flex;
  align-items:start;
`;


export const ContactContainerHeroOneInnerLeft = styled.div`

  width: 50%;
  height: 100px;

`;




export const ContactContainerHeroOneInnerLeftHeader = styled.h3`

  font-size: 40px;
  color: ${Colors.neutral_color.color900};

`;



export const ContactContainerHeroOneInnerLeftParagraph = styled.p`
  color: ${Colors.neutral_color.color600};
  width: 50%;
  margin-top: 20px;

`;


export const ContactContainerHeroOneInnerLeftList = styled.li`
  color: ${Colors.neutral_color.color800};
  list-style-type: none;
  margin-top: 20px;
`;


export const ContactContainerHeroOneInnerLeftMoreMenuContainer = styled.div`

display: flex;
margin-top: 70px;
height: fit-content;
align-items: start;
`;

export const ContactContainerHeroOneInnerLeftMoreMenuLeft = styled.div`

height: fit-content;


& h5{
    font-size:20px;
  color: ${Colors.neutral_color.color700};

}

& p{
  color: ${Colors.neutral_color.color500};
  width: 80%;
  margin-top: 15px;
}

`;


export const ContactContainerHeroOneInnerLeftMoreMenuRight = styled.div`

height: fit-content;

& h5{
  font-size:20px;
  color: ${Colors.neutral_color.color700};
}

& p{
  margin-top: 15px;
  color: ${Colors.neutral_color.color500};
  width: 80%;
}


`;
















export const ContactContainerHeroOneInnerRight = styled.div`

  width: 50%;
  height: fit-content;
`;



export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.h5`
  font-size: 40px;
  padding:  20px 0px;
  color: ${Colors.neutral_color.color700};
`;



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
  resize: vertical;

  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;