import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const ProductDetailContainer = styled.div`
height: 900px;
`

export const ProductDetailDiv = styled.div`
display: flex;
align-items: center;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: ${Colors.neutral_color.color500};

& > span{
    font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 16px;
color: ${Colors.neutral_color.color900};
}
`

export const ProductDetailDiv2 = styled.div`
display: flex;
align-items: center;
   font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
color: ${Colors.neutral_color.color900};
margin-top: 60px;
margin-bottom: 45px;
`
export const ProductDetailContainer1 = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  gap: 20px;
  width: 100vw;
  height: 500px;

  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: aut0;
  }
`
export const ProductDetailContainer2 = styled.div`

`
export const ProductDetailContainer3 = styled.div`

`

export const ProductDetailContainer4 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 20px;

`
export const ProductDetailContainer5 = styled.div`

`

export const ProductDetailContainer6 = styled.div`
display: flex;
width: 100%;
padding: 29px;
position: relative;
background-color: ${Colors.gray};

   & > img {
        width: 100%;
        height: 100%;
      }

`
export const ProductDetailContainer7 = styled.div`
 display: grid;
  grid-template-columns: auto auto auto auto;
   object-fit: contain;
   padding: 0px 12px;
   background-color: ${Colors.gray}
`
export const ProductDetailContainer8 = styled.div`
 padding: 17px 10px;


      & > img {
        width: 100%;
        height: 100%;
      }
`

export const ProductDetailContainer9 = styled.div`
position: absolute;
right: 15px;
top: 15px;
`