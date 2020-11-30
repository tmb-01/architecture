import React, {Component} from 'react';
import {Logo, Nav, NavbarContent, Navs, StyledNavbar} from "./styles";

function Navbar() {
    return (
        <StyledNavbar>
            <NavbarContent>
                <Logo>
                    Logo
                </Logo>
                <Navs>
                    <Nav>
                        Page 1
                    </Nav>
                    <Nav>
                        Page 2
                    </Nav>
                    <Nav>
                        Page 3
                    </Nav>
                </Navs>
            </NavbarContent>

        </StyledNavbar>
    );
}

export default Navbar;