import styled from "styled-components";
import OurVision from "./index";
import Woman from "../../assets/images/woman-house-model-key.jpg"
import Sketch from "../../assets/images/house-skatch.jpg"
import Building from "../../assets/images/building.jpg"
import {Container} from "../../components/Container/styles";

export const OurVisionBox = styled.div`
width: 100%;
background-color: var(--main-color);
padding: 60px 0;
box-sizing: border-box;
`;

export const OurVisionContainer = styled(Container)`
//width: 1140px;
//display: flex;
//flex-wrap: wrap;
//margin: auto;
background-color: white;
`;

export const Col = styled.div`
width: 33.33333333333%;

@media only screen and (max-width: 800px){
width: ${props=>props.last?"100%":"50%"};
}
@media only screen and (max-width: 576px){
//font-size: 70px;
width: 100%;
}


`;

export const OurVisionText = styled.div`
width: 100%;
padding: 50px 30px;
box-sizing: border-box;
`;

export const OurVisionTopText = styled.p`
margin: 20px 0 0;
font-size: 18px;
//font-family: Roboto,serif;

@media only screen and (max-width: 1100px){
font-size: 16px;
}
`;

export const ConstructionServices = styled.p`
font-size: 55px;
margin: 0;
color: var(--main-color);
//font-family: Roboto,serif;
@media only screen and (max-width: 1100px){
font-size: 45px;
}
`;

export const ListTitle = styled.p`
margin: 20px 0;
font-size: 18px;
font-weight: bold;

@media only screen and (max-width: 1100px){
font-size: 16px;
}

`;

export const Ulist = styled.ul`
padding-left: 20px;
li{
font-size: 16px;

@media only screen and (max-width: 1100px){
font-size: 14px;
}

}
`;

export const LearnMore = styled.p`
width: fit-content;
color: black;
border-bottom: 2px solid black;
margin: 0;
@media only screen and (max-width: 1100px){
font-size: 14px;
}
`;

export const BgImg1 = styled.div`
width: 100%;
height: 100%;
background-image: url(${Woman});
background-size: cover;
background-position: center;

@media only screen and (max-width: 576px){
//font-size: 70px;
height: 600px;
}
`;

export const BgImg2 = styled.div`
width: 100%;
height: 50%;
background-image: url(${props=>props.first?Sketch:Building});
background-size: cover;
background-position: center;

@media only screen and (max-width: 800px){
height:700px;
//object-fit: cover;
//padding: 20px;
}

@media only screen and (max-width: 576px){
height: 300px;
}

`;