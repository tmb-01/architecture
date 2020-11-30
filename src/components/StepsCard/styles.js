import styled from "styled-components"
import arrowIcon from "../../assets/icons/chevron-circle-right-solid.svg"


export const Card = styled.div`
width: 25%;
padding: 30px;
box-sizing: border-box;
background-color: ${props=>props.bg};
color: white;

@media only screen and (max-width: 1200px){
padding:20px;
}

@media only screen and (max-width: 1050px){
padding:30px;
width: 50%;
}

@media only screen and (max-width: 800px){
width: 100%;
}


`;

export const StepNumber=styled.p`
font-size: 60px;
font-weight: bold;
margin: 0;
`;

export const Title=styled.p`
font-size: 24px;
margin: 20px 0;

`;

export const Description=styled.p`
width: 90%;
font-size: 16px;
margin: 0 0 30px;
`;

export const Icon=styled.div`
width: 64px;
height: 64px;
background-image: url(${arrowIcon});
//path{
//fill: white;
//}
//img{
//path{
//fill: white;
//}
//color: white;
//width: 100%;
//}
`;

