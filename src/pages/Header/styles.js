import styled from "styled-components"
import headerBgImage from "../../assets/images/header-bg-image.jpg"
import {Container} from "../../components/Container/styles";

export const StyledHeader=styled.div`
width: 100%;
height: 750px;
background-image: url(${headerBgImage});
//border: 1px solid black;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
//background-attachment: fixed;

@media only screen and (max-width: 1100px){
//font-size: 70px;
height: 650px;
}
@media only screen and (max-width: 800px){
height: 500px;
}

@media only screen and (max-width: 576px){
height: fit-content;
padding: 0 0 20px;
}

`;

export const HeaderContent=styled(Container)`
//width: 1140px;
height: 100%;
//display: flex;
align-items: center;
//margin: auto;
`;

export const HeaderOrder=styled.div`
width: 410px;

@media only screen and (max-width: 576px){
width: 100%;
}

h1{
font-size: 96px;
font-weight: 700;
//font-family: roboto,serif;
margin: 0;
color: var(--main-color);
@media only screen and (max-width: 1100px){
font-size: 80px;
}
@media only screen and (max-width: 800px){
font-size: 70px;
}
}

p{
font-size: 16px;
font-style: italic;
font-family: 'Open Sans',serif;
margin: 30px 0;
}

`;

export const InputBox=styled.div`
display: flex;
width: 100%;

@media only screen and (max-width: 576px){
flex-direction: column;
}
`;
export const Input=styled.input`
width: 240px;
//height: 100%;
padding: 10px 20px;
display: block;
border: 0;
box-sizing: border-box;
//margin-bottom: 10px;
&:focus{
outline: 0;
}
@media only screen and (max-width: 576px){
width: 100%;
margin-bottom: 10px;
}
`;
export const InputButton=styled.button`
border: 0;
color: white;
display: block;
padding: 10px 30px;
background-color: var(--main-color);
`;