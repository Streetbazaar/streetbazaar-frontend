import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px solid rgba(239, 240, 242, 0.15);
  padding-bottom: 45px;

  & > div,
  & > ul {
    flex: 1;

    & > h4 {
      color: ${Colors.white};
      margin-bottom: 30px;
      width: 150px;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }

    li {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 17px;
      color: ${Colors.neutral_color.color100};
      opacity: 0.5;
      min-width: 30px;
      max-width: 160px;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 980px) {
    ul {
      display: flex;
      flex-direction: column;
      justify-items: space-between;
      min-width: 50%;
      box-sizing: border-box;
      margin-top: 28px;
      display: block;
    }
  }
`;

export const Flex2 = styled.div`
  display: flex;
 flex-wrap: wrap;
 padding-top: 45px;

  & > div {
    flex: 1;

  }

    .footer-logo{
    width: 50px;
    height: 50px;

    img {
      width: 50px;
      height: 50px
    }
  }
  
.footer-items{
 display:flex;
 gap:  40px;
 padding-top: 15px;
 font-size: 16px;
 font-weight:600;
 color: ${Colors.white};

 .footer-items-list {
    &:hover{
         opacity: 0.5;
         cursor:pointer;
      }
    }
}

.footer-icons {
  display:flex;
  gap: 20px;
  justify-content: flex-end;
  padding-top: 15px;
}

  svg:hover path {
  fill: ${Colors.neutral_color.color100};
}

   @media (max-width: 780px) {
   
      display: flex;
      flex-direction: column;
      gap: 20px;

       .footer-icons {
     justify-content: start;
     }
   
`;
