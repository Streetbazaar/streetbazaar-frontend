// Contact.js
import React from 'react';
import { useNavigate } from "react-router-dom";

import { 
  ContactContainer,
  ContactContainerHeroOne,
  ContactContainerHeroOneInnerRight,
  ContactContainerHeroOneInnerLeft,
  ContactContainerHeroOneInnerLeftHeader,
  ContactContainerHeroOneInnerLeftParagraph,
  ContactContainerHeroOneInnerLeftList,
  ContactContainerHeroOneInnerLeftMoreMenuContainer,
  ContactContainerHeroOneInnerLeftMoreMenuRight,
  ContactContainerHeroOneInnerLeftMoreMenuLeft,
  ContactContainerHeroTwo,
  ContactContainerHeroTwoInnerLeft,
  ContactContainerHeroTwoInnerRight,
  ContactContainerHeroTwoInnerRightHeader,
  ContactContainerHeroTwoInnerRightSmallHeader,
  ContactContainerHeroTwoInnerRightParagraph,
  ContactContainerHeroTwoInnerRightList,
  FormContainer,
  FormHeader, 
  StyledForm, 
  Input, 
  TextArea, 
  SubmitButton, 
  ContactContainerHeroThree,
  ContactContainerHeroThreeHeader,
  PrimaryBtn
} from '../components/styles/contact.styled';
import MapComponent from '../components/map/map'; 

const Contact = () => {

  const navigate = useNavigate();


  const checkUserProfile = () => {
      navigate("/sell-your-product/post-advert");
  };



  return (
    <ContactContainer>
   





    <ContactContainerHeroOne>



    <ContactContainerHeroOneInnerLeft>

    <ContactContainerHeroOneInnerLeftHeader>Contact Us</ContactContainerHeroOneInnerLeftHeader>
    <ContactContainerHeroOneInnerLeftParagraph>Email, Call or Complete the Form to learn how we can sole your problem</ContactContainerHeroOneInnerLeftParagraph>
    <ContactContainerHeroOneInnerLeftList>support@streetzbazaar.net</ContactContainerHeroOneInnerLeftList>
    <ContactContainerHeroOneInnerLeftList>+234 832-019-9334</ContactContainerHeroOneInnerLeftList>



    <ContactContainerHeroOneInnerLeftMoreMenuContainer>
  
    <ContactContainerHeroOneInnerLeftMoreMenuLeft>
      <h5>Customer Support</h5>  
        <p>Our Support Team is Available Around The Clock To Address any Concerns or Queries you might have</p>
    </ContactContainerHeroOneInnerLeftMoreMenuLeft>
    

    <ContactContainerHeroOneInnerLeftMoreMenuRight>
    <h5>FeedBack and Suggestion</h5>  
        <p>Our Support Team is Available Around The Clock To Address any Concerns or Queries you might have</p>
  </ContactContainerHeroOneInnerLeftMoreMenuRight>
  
  
    </ContactContainerHeroOneInnerLeftMoreMenuContainer>

    </ContactContainerHeroOneInnerLeft>



    <ContactContainerHeroOneInnerRight>

    <FormContainer>
    <FormHeader>Get in Touch</FormHeader>
      <StyledForm >
        <Input type="text" placeholder="First name" required />
        <Input type="text" placeholder="Last name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Number" required />
        <TextArea placeholder="How we can help" required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormContainer>

    </ContactContainerHeroOneInnerRight>




    </ContactContainerHeroOne>

 


   
    <ContactContainerHeroTwo>


    <ContactContainerHeroTwoInnerLeft> 
      <MapComponent/>
    </ContactContainerHeroTwoInnerLeft>



    <ContactContainerHeroTwoInnerRight>   

    <ContactContainerHeroTwoInnerRightSmallHeader>Our Location</ContactContainerHeroTwoInnerRightSmallHeader>
    <ContactContainerHeroTwoInnerRightHeader>Connectings Near and Far</ContactContainerHeroTwoInnerRightHeader>
    <ContactContainerHeroTwoInnerRightSmallHeader>HeadQuarters</ContactContainerHeroTwoInnerRightSmallHeader>
    <ContactContainerHeroTwoInnerRightParagraph>Email, Call or Complete the Form to learn how we can sole your problem</ContactContainerHeroTwoInnerRightParagraph>
    <ContactContainerHeroTwoInnerRightList>Sappy Inc</ContactContainerHeroTwoInnerRightList>
    <ContactContainerHeroTwoInnerRightList>San Franscisco, USA</ContactContainerHeroTwoInnerRightList>
    <ContactContainerHeroTwoInnerRightList>123 Tech Boulevard, Suite 456</ContactContainerHeroTwoInnerRightList>
    <ContactContainerHeroTwoInnerRightList>San Franscisco, CA 12345</ContactContainerHeroTwoInnerRightList>
    <ContactContainerHeroTwoInnerRightList>United States </ContactContainerHeroTwoInnerRightList>

    </ContactContainerHeroTwoInnerRight>




    </ContactContainerHeroTwo>

  


    <ContactContainerHeroThree>

   <div> <ContactContainerHeroThreeHeader>Ready To Take Your Business To The Next Level</ContactContainerHeroThreeHeader>

    <PrimaryBtn onClick={checkUserProfile}>
          <p>Sell your product</p>
        </PrimaryBtn>
      </div>
    </ContactContainerHeroThree>



   

    </ContactContainer>
  )
}

export default Contact