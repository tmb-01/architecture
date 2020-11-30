import React, {Component} from 'react';
import {Col1, Col2, ContainerOurCompany, Line, Text, Title} from "./styles";
import Button from "../../components/Button";
import ImgBuilding from '../../assets/images/buildings-from-bottom.jpg'

function AboutOurCompany() {
    return (
        <ContainerOurCompany>
            <Col1>
                <Line/>
                <Title>
                    About Our Company
                </Title>
                <Text>
                    Your dream: to make beautiful things that make life more beautiful. To capture and reflect the world
                    in a meaningful, unique way. Our engineers facilitate project implementation from design to
                    construction, for flawless execution and results.
                </Text>
                <Button text={"START NOW"}/>
            </Col1>
            <Col2>
                <img src={ImgBuilding} alt=""/>
            </Col2>
        </ContainerOurCompany>
    );
}

export default AboutOurCompany;