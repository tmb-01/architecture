import styled from "styled-components"
import {Container} from "../../components/Container/styles";

export const StyledNavbar=styled.div`
width: 100%;
background-color: white;
padding: 15px 0;
//border: 1px solid black;
`;

export const NavbarContent=styled(Container)`
//width: 1140px;
//display: flex;
justify-content: space-between;
//margin: auto;
align-items: center;
`;

export const Logo=styled.div`
font-size: 30px;
color: #bbb;
font-weight: bold;
`;

export const Navs=styled.div`
width: fit-content;
display: flex;
justify-content: space-between;
`;

export const Nav=styled.div`
width: fit-content;
margin: 0 10px;
color: blue;
cursor: pointer;
&:hover{
color: var(--main-color);
}
`;