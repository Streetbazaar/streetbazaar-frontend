import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const Div = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-top: 45px;
margin-bottom: 15px;

span {
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: ${Colors.neutral_color.color900};
}



}
`

export const ProductContainer = styled.div`
display: grid;
  grid-template-columns:  auto auto auto auto;
  gap: 10px;
  width: 100%;
 
@media screen and (max-width: 900px){
     grid-template-columns:  auto auto auto;
}
@media screen and (max-width: 640px){
     grid-template-columns:  auto auto;
}
`

export const ProductItem = styled.div`
padding: 11px;
background: ${Colors.gray};
border-radius: 2px;
 
& > div {
display: flex;
flex-direction: column;

& > div{
height: 70%;
width: 100%;
  object-fit:contain;

    & > img {
 
   width: 100%;
   height: 100%;
}
}
}

& > div::second-child {
    display: flex;
    background: black;
}

.product-list{
display: flex;
flex-direction: column;
margin-top: 15px;

}
.product-list1{
display: flex;
justify-content: space-between;
align-items: center;

h2{
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: ${Colors.neutral_color.color900}
}
}

.product-list2{
  margin-top: 5px;

  p{
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 24px;
color: ${Colors.success_color.color500};
  }
}

button {
  box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 46px;
opacity: 0.45;
border: 1px solid ${Colors.neutral_color.color900};
border-radius: 4px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
margin-top: 15px;
}
`


