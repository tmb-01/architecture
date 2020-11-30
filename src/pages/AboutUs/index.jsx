import React, {Component} from 'react';
import {AboutUsPage, Description, Title} from "./styles";
import Button from "../../components/Button";

function AboutUs() {
    return (
        <AboutUsPage>
            <Title>
                We are sustainable construction
            </Title>
            <Description>
                We are the authority for completing construction projects in environmentally sensitive surroundings. Our
                team is focused on finding innovative solutions to the most complex construction projects while ensuring
                that we limit our environmental footprint and impact.
            </Description>
            <Button text={"READ MORE"} center/>
        </AboutUsPage>
    );
}

export default AboutUs;