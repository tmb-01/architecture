import styled from "styled-components";

export const StyledButton=styled.button`
padding: ${props=> props.small?"10px 30px":"14px 48px"};
font-weight: 600;
background-color: var(--main-color);
display: block;
margin: ${props=>props.center?"0 auto":"0"};
color: white;
border: 0;
&:focus{
outline:0;
}

&:active{
  opacity: 0.8;
}
`;