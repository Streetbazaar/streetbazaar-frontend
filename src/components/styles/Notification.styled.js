import styled from "@emotion/styled";
import { Colors } from "../../utils/colors";

export const Div = styled.div`
position: absolute;
top: 10px;
z-index: 20;
width: 500px;
height: 60px;
left: 30%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 16px;
color: ${Colors.primary_color.color500};
top: 140px;
background: ${Colors.primary_color.color100};
border: 2px solid ${Colors.primary_color.color200};
border-radius: 4px;
`