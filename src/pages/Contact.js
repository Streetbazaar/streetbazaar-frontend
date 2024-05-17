// Contact.js
import React from 'react';
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
  FormContainer,
  FormHeader, 
  StyledForm, 
  Input, 
  TextArea, 
  SubmitButton, 
} from '../components/styles/contact.styled';

const Contact = () => {
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
   

    </ContactContainer>
  )
}

export default Contact