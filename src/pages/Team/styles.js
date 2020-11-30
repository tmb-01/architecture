import styled from "styled-components";


export const TeamBox = styled.div`
background-color: white;

img{
width: 100%;
height: auto;
}
`;

export const Cards = styled.div`
max-width: 90%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
transform: translateY(-160px);
`;

export const Card = styled.div`
width: 30%;
display: flex;
justify-content: center;
flex-direction: column;
padding: 30px;
border: 1px solid lightgrey;
box-sizing: border-box;
background-color: white;
transition-duration: 0.5s;
@media only screen and (max-width: 800px){
width: 45%;
margin-top: 20px;
}

@media only screen and (max-width: 576px){
width:90%;
margin: 20px auto 0;
}

&:hover{
transform: scale(1.2);
}

`;

export const Icon = styled.div`
width: 100px;
height: 100px;
padding: 20px;
background-color: var(--main-color);
border-radius: 50%;
box-sizing: border-box;
color: white;
margin: 0 auto 16px;
svg{
//width: fit-content;
path{
fill: white;
}
}
`;


export const Title = styled.p`
font-size: 20px;
text-align: center;
margin: 0;
@media only screen and (max-width: 1100px){
font-size: 18px;
}
@media only screen and (max-width: 800px){
font-size: 16px;
}
`;

export const Text = styled.p`
//width: 90%;
font-size: 16px;
text-align: center;
margin: 20px auto 20px;
@media only screen and (max-width: 1100px){
font-size: 14px;
}
`;