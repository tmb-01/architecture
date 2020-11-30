import styled from "styled-components"
import {Container} from "../../components/Container/styles";
// import {Container} from "../OurVision/styles";

export const ContainerOurCompany=styled(Container)`
background-color: transparent;
padding: 60px 0;
display: flex;
@media only screen and (max-width: 576px){
flex-direction: column;
}
`

export const Col1 = styled.div`
width: 70%;
padding: 60px 30px;
box-sizing: border-box;
@media only screen and (max-width: 576px){
width: 100%;
}
`;

export const Col2 = styled.div`
width: 30%;
padding: 60px 30px;
box-sizing: border-box;
display: flex;
align-items: center;
//object-fit: fill;
img{
width: 100%;
}
@media only screen and (max-width: 576px){
width: 100%;
}
`;

export const Line=styled.div`
width: 100px;
border: 5px solid var(--main-color);
margin-bottom: 20px;
box-sizing: border-box;
`;

export const Title=styled.h2`
font-weight: 400;
font-size: 60px;
margin: 0;
color: var(--main-color);
@media only screen and (max-width: 1100px){
font-size: 50px;
}
@media only screen and (max-width: 800px){
font-size: 40px;
}
`;

export const Text=styled.p`
font-size: 18px;
margin: 20px 0;
@media only screen and (max-width: 1100px){
font-size: 16px;
}
@media only screen and (max-width: 800px){
font-size: 14px;
}
`;