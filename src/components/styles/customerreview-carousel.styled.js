// Contact.styles.js
import styled from 'styled-components';
import { Colors } from "../../utils/colors";


export const SliderInnerContainer = styled.div`
   margin-top: 200px;
   /* height: 500px ; */
   /* width: 600px; */
   /* background-color: ${Colors.primary_color.color100}; */
   justify-content: center;
   align-items: center;
   display: flex;
   padding-top: 50px;
   padding-bottom: 50px;


   
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #333; // Adding a custom focus shadow
  }

`;


export const SliderInner = styled.div`
   height: fit-content ;
   width: 40%;
   background-color: ${Colors.primary_color.color200};
    margin-left: auto;
    margin-right: auto;
    display: block;
   padding-bottom:50px;

   
   
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #333; // Adding a custom focus shadow
  }
   
   @media (max-width: 991px) { 
    height: 350px;
    width: 60%;
  }

  @media (max-width: 678px) { 
    height: 350px;
    width: 90%;
  }
`;



export const SliderInnerTopLine  = styled.div`
   height: 12px ;
   width: 100%;
   background-color: ${Colors.primary_color.color400};
    margin-left: auto;
    margin-right: auto;
    display: flex;
`;


export const SliderInnerImage = styled.img`
   height: 100px;
   width: 100px;
   border-radius: 50%;
    margin-top: -50px;
   margin-left: auto;
    margin-right: auto;
`;



export const SliderInnerParagraph = styled.p`
   height: fit-content ;
   text-align: center;
   margin-top: 20px;
   width: 60%;
    margin-left: auto;
    margin-right: auto;
`;


export const BottomSliderInner =  styled.div`

   margin-top: 80px;
   padding-top: 20px;
    border-top: 2px solid ${Colors.gray};
   display: block;
   text-align: center;
   justify-content: center;
   margin-left: auto;
   margin-right: auto;

  & h5{
   margin-top: 10px;
   font-weight: 700;
   color: ${Colors.primary_color.color300};
   font-size: 20px;
  }


  & span{
      margin-top: 10px;
      color: ${Colors.secondary_color.color300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #333; // Adding a custom focus shadow
  }
`;
 



export const ArrowButton = styled.button`
  display: block;
  background: #ddd;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  color: #333;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  position: absolute;

  &:hover {
    background: #ccc;
    color: #000;
  }
`;
