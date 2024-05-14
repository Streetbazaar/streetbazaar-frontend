// Contact.js
import React from 'react';
import { ContactContainer,ContactHeader, Wrapper, Form, FormRow, Input, TextArea, SubmitButton, InfoWrap } from '../components/styles/contact.styled';

const Contact = () => {
  return (
    <ContactContainer>
      <Wrapper>
        <div className="row no-gutters">
          <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
            <div className="contact-wrap w-100 p-md-5 p-4">
              <ContactHeader className="mb-4">Get in touch</ContactHeader>
                    <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
            <InfoWrap>
           <div id="form-message-warning" className="mb-3"></div>
              <h3>Let's get in touch</h3>
             
              <p className="mb-4">We're open for any suggestion or just to have a chat</p>
              {/* Content omitted for brevity */}
            </InfoWrap>
          </div>
          <div id="form-message-warning" className="mb-4"></div>
              
              <Form method="POST" id="contactForm" name="contactForm" className="contactForm">
                <FormRow>
                  <div className="col-md-6">
                    <Input type="text" name="name" id="name" placeholder="Full Name" />
                  </div>
                  <div className="col-md-6">
                    <Input type="email" name="email" id="email" placeholder="Email Address" />
                  </div>
                </FormRow>
                <FormRow>
                  <div className="col-md-12">
                    <Input type="text" name="subject" id="subject" placeholder="Subject" />
                  </div>
                </FormRow>
                <FormRow>
                  <div className="col-md-12">
                    <TextArea name="message" id="message" cols="30" rows="4" placeholder="Message"></TextArea>
                  </div>
                </FormRow>
                <FormRow>
                  <div className="col-md-12">
                    <SubmitButton type="submit" value="Send Message" />
                  </div>
                </FormRow>
              </Form>
            </div>
          </div>
    
        </div>
      </Wrapper>
    </ContactContainer>
  )
}

export default Contact