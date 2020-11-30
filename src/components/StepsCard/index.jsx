import React, {Component} from 'react';
import {Card, Description, Icon, StepNumber, Title} from "./styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/chevron-circle-right-solid.svg"

function StepsCard({stepNumber, title, description,bgColor}) {
    return (
        <Card bg={bgColor}>
            <StepNumber>
                {stepNumber}
            </StepNumber>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Icon>
                <ArrowIcon/>
                {/*<img src={arrowIcon} alt=""/>*/}
            </Icon>
        </Card>
    );
}

export default StepsCard;