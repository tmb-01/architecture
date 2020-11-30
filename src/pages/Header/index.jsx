import React, {Component} from 'react';
import {HeaderContent, HeaderOrder, Input, InputBox, InputButton, StyledHeader} from "./styles";
import HeaderBgImage from "../../assets/images/header-bg-image.jpg"
import Button from "../../components/Button";

function Header (){
        return (
            <StyledHeader>
                <HeaderContent>
                    <HeaderOrder>
                        <h1>Building a House?</h1>
                        <p>
                            You'll get to personalize the details of your house when you're building a house from
                            the ground up - from the layout
                        </p>
                        <InputBox>
                            <Input placeholder="Enter valid email address"/>
                            <Button text={"SUBMIT"} small/>
                        </InputBox>

                    </HeaderOrder>
                </HeaderContent>

            </StyledHeader>
        );
}

export default Header;