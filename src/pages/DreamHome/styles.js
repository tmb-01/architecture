import styled from "styled-components";
import Img from "../../assets/images/man-with-wooden-home.jpg"
import {Container} from "../../components/Container/styles";

export const DreamHomeContainer=styled(Container)`
display: flex;

@media only screen and (max-width: 576px){
//font-size: 70px;
flex-direction: column;
}

`;

export const DreamHomeBox=styled.div`
width: 100%;
height: fit-content;
background-color: white;
`;


export const DreamHomeCol=styled.div`
width: 50%;
display: flex;
align-items: center;
${props=>props.last?"":"padding: 0 50px"};
box-sizing: border-box;

@media only screen and (max-width: 576px){
width: 100%;

//padding: 30px;
}
`;

export const DreamHomeText=styled.div`
p:first-child{
margin: 0;
font-size: 18px;

@media only screen and (max-width: 1100px){
font-size: 16px;
}
@media only screen and (max-width: 800px){
font-size: 14px;
}
}

@media only screen and (max-width: 576px){
padding: 40px 0 20px;
}
`;

export const DreamHomeTitle=styled.p`
font-size: 60px;
color: var(--main-color);
margin: 0;
font-weight: bold;
@media only screen and (max-width: 1100px){
font-size: 50px;
}

@media only screen and (max-width: 800px){
font-size: 35px;
}
`;

export const DreamHomeDescription=styled.p`
font-size: 20px;
color: #555C66;
margin: 30px 0;
@media only screen and (max-width: 1100px){
font-size: 18px;
}
@media only screen and (max-width: 800px){
font-size: 16px;
}
`;

export const DreamHomeBgImg=styled.div`
//width: 100%;
background-image: url(${Img});
background-size: cover;
background-position: center;
background-clip: padding-box;
min-height: 737px;
width: 100%;
@media only screen and (max-width: 1100px){
min-height: 600px;
}
@media only screen and (max-width: 800px){
min-height: 450px;
}

@media only screen and (max-width: 576px){
min-height: 600px;
}
`;



