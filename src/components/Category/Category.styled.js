import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const CategoryContainer = styled.div`
margin-top: 13px;
`
export const CategoryItem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
gap: 10px;
`

export const GridItem = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  height: 300px;
  flex-direction: column;
 border-radius: 2px;
`;

export const Flex1 = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: end;
height: 100%;
width: 100%;
 padding: 13px 17px;
`

export const Flex1Item1 = styled.div`
display: flex;
flex-direction: column;
height: 100%;

h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 8px;
    line-height: 24px;
    color: ${Colors.neutral_color.color900};
}

p{
    font-size: 8px;
    color: ${Colors.neutral_color.color600};
}
`

export const Flex2 = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
box-sizing: border-box;


 div {
    display:flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    width: 100%;
}
`


export const Flex2Item = styled.button`
border-radius: 2.5px;
font-size: 8px;
border: 1px solid ${Colors.neutral_color.color400};
background: transparent;
color: ${Colors.neutral_color.color900};
width: 60px;
height: 30px;
margin-left: 17px;
margin-bottom: 17px;

&:hover {
    background: ${Colors.neutral_color.color400};
    color: white
}
`

export const Image = styled.img`
    height: 200px;
    box-sizing: border-box;
    width: 235px;

   
    @media (max-width: 700px){
        display:none
    }

     @media (min-width: 780px and max-width: 1100px){
         height: 200px;
          width: 200px;
    }

`


// export const SubGridItem = styled.div`
// background-color: ${(props) => props.bgColor};
//   display: flex;
//  width: 100%;
// `

// export const GridItem2 = styled.div`
//   background-color: ${(props) => props.bgColor};
//   display: flex;
//   height: 300px;
// `;


// export const Flex1Item2 = styled.div`
// padding :9px 17px;
// border-radius: 2.5px;
// font-size: 8px;
// border: 1px solid ${Colors.neutral_color.color400};
// background: transparent;
// color: ${Colors.neutral_color.color900};
// `