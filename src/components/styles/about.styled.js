import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const AboutContainer = styled.div`
  padding-top: 8%;
  min-height:70vh;  
  width:100%;
  padding-bottom: 10%;
`;


export const AboutUsContainerHeroOne = styled.div`
  background-color:${Colors.primary_color.color100};
  height:400px;
  display:flex;
  width:100%;
  align-items: center;
  overflow :hidden ;


  @media (max-width: 991px) { 
      display: block;
      height:fit-content;
  }

  
`;


export const AboutUsContainerHeroOneInnerLeft = styled.div`
  height:100%;
  width:50%;
  align-items: center;
  display: flex;
  padding: 0 10%;

  @media (max-width: 991px) { 
    height: 350px;
    width: 100%;
  }


`;


export const AboutUsContainerHeroOneInnerRight = styled.div`
  height:100%;
  width:50%;
  align-items: center;
  text-align: center;


  @media (max-width: 991px) { 
    width: 100%;
  }
`;






export const AboutUsContainerHeroTwo = styled.div`
  /* background-color:${Colors.primary_color.color100}; */
  height:400px;
  display:flex;
  width:80%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  overflow :hidden ;
  margin-top: 200px;


  @media (max-width: 991px) { 
      display: block;
      height:fit-content;
  }

  
`;


export const AboutUsContainerHeroTwoInnerLeft = styled.div`

  height:100%;
  width:50%;
  align-items: center;
  justify-content:center ;
  text-align: center;


  @media (max-width: 991px) { 
    width: 100%;
  }
`;


export const AboutUsContainerHeroTwoInnerRight = styled.div`
  height:100%;
  width:50%;
  align-items: center;
  display: flex;
  padding: 0 10%;

  @media (max-width: 991px) { 
    height: 350px;
    width: 100%;
  }
`;




export const AboutUsContainerHeroTwoInnerLeftImage  = styled.img`

margin-left: auto;
margin-right: auto;
text-align: center;

`;

 





export const AboutUsContainerHeroThree = styled.div` 
  height:400px;
  display:flex;
  width:80%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  overflow :hidden;
  margin-top: 200px;


  @media (max-width: 991px) { 
      display: block;
      height:fit-content;
  }

  
`;


export const AboutUsContainerHeroThreeInnerLeft = styled.div`
  height:100%;
  width:50%;
  align-items: center;
  display: flex;
  padding: 0 7%;

  @media (max-width: 991px) { 
    height: 350px;
    width: 100%;
  }


`;


export const AboutUsContainerHeroThreeInnerRight = styled.div`
  height:100%;
  width:50%;
  align-items: center;
  text-align: center;


  @media (max-width: 991px) { 
    width: 100%;
  }
`;








export const AboutUsHeader = styled.h2`
font-size: 40px;
color: ${Colors.primary_color.color300};
margin-bottom: 15px;
`;



