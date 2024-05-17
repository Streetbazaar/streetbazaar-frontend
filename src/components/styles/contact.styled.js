// Contact.styles.js
import styled from 'styled-components';
import { Colors } from "../../utils/colors";
import { ColorLens } from '@mui/icons-material';


export const ContactContainer = styled.div` 
  display: block;
  padding-bottom: 100px;
`;



export const ContactContainerHeroOne = styled.div`
  background-color: ${Colors.primary_color.color100};
  padding: 12% 100px;
  height:fit-content;
  width:100%;
  display: flex;
  align-items:center;

  @media (max-width:991px){
    display: block;
   padding: 0% 50px;
   padding-bottom: 100px;
    
  }

`;


export const ContactContainerHeroOneInnerLeft = styled.div`

  width: 50%;
  height:fit-content;


  @media (max-width:991px){
   padding-top: 150px;
    width: 100%;
    display: block;
    
  }
`;




export const ContactContainerHeroOneInnerLeftHeader = styled.h3`

  font-size: 40px;
  color: ${Colors.neutral_color.color900};

`;



export const ContactContainerHeroOneInnerLeftParagraph = styled.p`
  color: ${Colors.neutral_color.color600};
  width: 50%;
  margin-top: 20px;


  @media (max-width:991px){
    width: 80%;
  }
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


@media (max-width:768px){
    width: 100%;
    display: block;
    
  }
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


@media (max-width:768px){    
  margin-top: 40px;
  }
`;














export const ContactContainerHeroOneInnerRight = styled.div`

  width: 50%;
  height: fit-content;

  @media (max-width:991px) {
    padding-top: 80px;
    width: 100%;
  }
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















export const ContactContainerHeroTwo = styled.div`
  padding: 12% 100px;
  height:fit-content;
  width:100%;
  display: flex;
  align-items:center;

  @media (max-width:991px){
    display: block;
   padding: 0% 50px;
   padding-bottom: 100px;
    
  }

`;


export const ContactContainerHeroTwoInnerRight = styled.div`

  width: 50%;
  height:fit-content;


  @media (max-width:991px){
   padding-top: 150px;
    width: 100%;
    display: block;
    
  }
`;




export const ContactContainerHeroTwoInnerRightHeader = styled.h3`

  font-size: 40px;
  color: ${Colors.neutral_color.color900};

`;



export const ContactContainerHeroTwoInnerRightParagraph = styled.p`
  color: ${Colors.neutral_color.color600};
  width: 50%;
  margin-top: 20px;


  @media (max-width:991px){
    width: 80%;
  }
`;

export const ContactContainerHeroTwoInnerRightSmallHeader = styled.h6`
  color: ${Colors.neutral_color.color600};
  width: 50%;
  margin-top: 20px;
  font-size: 20px;

`;


export const ContactContainerHeroTwoInnerRightList = styled.li`
  color: ${Colors.neutral_color.color800};
  list-style-type: none;
  margin-top: 10px;
`;






export const ContactContainerHeroTwoInnerLeft = styled.div`

  width: 50%;
  height: fit-content;

  @media (max-width:991px) {
    padding-top: 80px;
    width: 100%;
  }
`;




export const ContactContainerHeroThree = styled.div`

width: 100%;
height: 700px;
background-image: url('https://images.pexels.com/photos/439818/pexels-photo-439818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-position: bottom;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

export const ContactContainerHeroThreeHeader = styled.h2`

font-size: 70px;
color: ${Colors.primary_color.color200};

`;

export const PrimaryBtn = styled.a`
  outline: none;
  border: none;
  background: none;
  text-decoration: none;
  background-color: ${Colors.primary_color.color500};
  display: flex;
  gap: 10px;
  border-radius: 2px;
  padding: 15px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  color: ${Colors.white};
  justify-content: center;
  width: fit-content;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;