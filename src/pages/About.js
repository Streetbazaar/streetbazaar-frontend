import React from 'react'
import {
    AboutContainer,
    AboutUsContainerHeroOne,
    StyleAbout,
    AboutUsContainerHeroTwoInnerLeftImage,
    AboutUsContainerHeroOneInnerLeft,
    AboutUsContainerHeroOneInnerRight,
    AboutUsContainerHeroTwo,
    AboutUsContainerHeroTwoInnerLeft,
    AboutUsContainerHeroTwoInnerRight,
    AboutUsContainerHeroThree,
    AboutUsContainerHeroThreeInnerLeft,
    AboutUsContainerHeroThreeInnerRight,
    AboutUsHeader
} from '../components/styles/about.styled'
import CustomerReview from '../components/about/customerreview-carousel';



const About = () => {
    return (
        <AboutContainer> 


        <AboutUsContainerHeroOne>
          <AboutUsContainerHeroOneInnerLeft>
             <div><AboutUsHeader>About Us</AboutUsHeader>
                <p>Street Bazaar's company and culture are a lot like our product. They’re crafted, not cobbled, for a delightful experience.</p>
                </div>   
          </AboutUsContainerHeroOneInnerLeft>
            <AboutUsContainerHeroOneInnerRight>
                <AboutUsContainerHeroTwoInnerLeftImage src='https://www.hubspot.com/hs-fs/hubfs/Hubspotters.jpg?width=701&height=468&name=Hubspotters.jpg' alt=''/>
            </AboutUsContainerHeroOneInnerRight>
        </AboutUsContainerHeroOne>




        <AboutUsContainerHeroTwo>
          <AboutUsContainerHeroTwoInnerLeft>
                <AboutUsContainerHeroTwoInnerLeftImage src='https://www.hubspot.com/hs-fs/hubfs/grow-better.jpg?width=567&height=378&name=grow-better.jpg' alt=''/>
          </AboutUsContainerHeroTwoInnerLeft>
            <AboutUsContainerHeroTwoInnerRight> 
                <div>
                <AboutUsHeader>Our Mission: Helping Thousands Of Businesses Grow Better</AboutUsHeader>
                <p>We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</p>
                </div>   
                </AboutUsContainerHeroTwoInnerRight>
        </AboutUsContainerHeroTwo>




        <AboutUsContainerHeroThree>
          <AboutUsContainerHeroThreeInnerLeft>
             <div><AboutUsHeader>Our Story</AboutUsHeader>
                <p>In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
                    Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
                </div>   
          </AboutUsContainerHeroThreeInnerLeft>
            <AboutUsContainerHeroThreeInnerRight>
                <AboutUsContainerHeroTwoInnerLeftImage src='https://www.hubspot.com/hs-fs/hubfs/Rangan-Halligan.jpg?width=567&height=378&name=Rangan-Halligan.jpg' alt=''/>
            </AboutUsContainerHeroThreeInnerRight>
        </AboutUsContainerHeroThree>




        <CustomerReview/>






        </AboutContainer>
    )
}

export default About