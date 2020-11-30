import styled from "styled-components"

export const AboutUsPage = styled.div`
text-align: center;
padding: 60px;
`;

export const Title = styled.p`
margin: 0;
font-size: 60px;
font-weight: bold;
text-align: center;
color: var(--main-color);

@media only screen and (max-width: 1100px){
font-size: 50px;
}

@media only screen and (max-width: 800px){
font-size: 40px;
}
`;

export const Description = styled.p`
max-width: 750px;
margin: 28px auto;
font-size: 20px;
font-weight: 400;
//font-family: "Open Sans",serif;
text-align: center;
color: #555C66;
line-height: 30px;
@media only screen and (max-width: 1100px){
font-size: 18px;
}

@media only screen and (max-width: 800px){
font-size: 16px;
}

`;

// export const Button