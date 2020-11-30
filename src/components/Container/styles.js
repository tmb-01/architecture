import styled from "styled-components";

export const Container=styled.div`
width: 1140px;
margin: auto;
display: flex;
flex-wrap: wrap;

@media only screen and (max-width: 1200px){
width: 1050px;
}
@media only screen and (max-width: 1100px){
width: 950px;
}

@media only screen and (max-width: 1000px){
width: 850px;
}

@media only screen and (max-width: 900px){
width: 750px;
}

@media only screen and (max-width: 800px){
width: 90%;
}

`;