import styled from "styled-components"
import OfficeImg from "../../assets/images/office.jpg"
import {Container} from "../../components/Container/styles";

export const GetInTouchBox = styled.div`
width: 100%;
padding: 60px 0;
background-image:url(${OfficeImg});
`;

export const GetInTouchContainer=styled(Container)`
background-color: white;
`;

export const BoxTop = styled.div`
width: 100%;
padding: 30px;
border: 1px solid lightgrey;
`;

export const Title = styled.p`
font-size: 60px;
text-align: center;
color: var(--main-color);
margin: 0;
@media only screen and (max-width: 1100px){
font-size: 50px;
}

@media only screen and (max-width: 800px){
font-size: 40px;
}

`;

export const Line = styled.span`
border: 2px solid var(--main-color);
max-width: 106px;
box-sizing: border-box;
margin: 15px auto 0;
display: block;

`;

export const SubTitle = styled.p`
color: black;
font-size: 18px;
text-align: center;
@media only screen and (max-width: 1100px){
font-size: 16px;
}
@media only screen and (max-width: 800px){
font-size: 14px;
}
`;

export const Text = styled.p`
max-width: 860px;
color: #808080;
margin: 0 auto 20px;
font-size: 16px;
text-align: center;
@media only screen and (max-width: 1100px){
font-size: 14px;
}
@media only screen and (max-width: 800px){
font-size: 12px;
}
`;

export const BoxBottom = styled.div`
width: 50%;
padding: 30px;
box-sizing: border-box;
border: 1px solid lightgrey;

@media only screen and (max-width: 576px){
width: 100%;
}

`;

export const Icon = styled.p`
width: 38px;
height: 38px;
padding: 10px;
box-sizing: border-box;
background-color: var(--main-color);
color: white;
border-radius: 50px;
text-align: center;
svg{
height: 100%;
}
`;

export const TextUnderIcon = styled.p`
font-weight: bold;

@media only screen and (max-width: 1100px){
font-size: 14px;
}
@media only screen and (max-width: 800px){
font-size: 12px;
}

${props=>props.last?"margin-bottom: 0":"margin-bottom: 25px"}

`;

export const Input=styled.input`
border: 1px solid lightgrey;
padding: 13px;
box-sizing: border-box;
width: 100%;
margin: 8px 0;
&::placeholder{
color: darkgrey;
}
&:focus{
outline: 0;
}
`;

export const Textarea=styled.textarea`
border: 1px solid lightgrey;
height: 150px;
padding: 13px;
box-sizing: border-box;
width: 100%;
margin: 8px 0;
&::placeholder{
color: darkgrey;
}
&:focus{
outline: 0;
}
`;
