import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const TestimoniesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 75px 150px;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
  background: ${Colors.secondary_color.color100};

   
@media screen and (max-width: 900px){
     padding: 40px 40px;
     height: 625px;
     justify-content: start;
}
@media screen and (max-width: 640px){
     padding: 40px 40px;
     height: 680px;
     justify-content: start;
     

}
`;

export const TestimoniesContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${Colors.secondary_color.color500};
  }

  .svg {
    margin-top: 15px;
    margin-bottom: 40px;
  }

  .testimonies {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;
    width: 100%;
    height: 300px;

    @media screen and (max-width: 900px) {
      grid-template-columns: auto;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: auto;
    }

    .testimonies1 {
      background: ${Colors.unknown2};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 21px;
      gap: 8px;
      width: 100%;
      height: 100%;
      border: 3px dashed ${Colors.unknown};
      border-radius: 5px;
    }

    .testimonies2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;

      .testimonies3 {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        border: 0px solid ${Colors.neutral_color.color900};
        margin-bottom: 13px;

        img {
          height: 60px;
        }
      }

      .testimonies4 {
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        color: ${Colors.neutral_color.color900};
        margin-bottom: 13px;
      }

      .testimonies5 {
        display: flex;
        align-items: center;
        margin-bottom: 7px;
        gap: 5px;
      }

      .testimonies6 {
        margin-top: 12px;

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          text-align: center;
          color: ${Colors.neutral_color.color900};
        }
      }
    }
  }
`;
