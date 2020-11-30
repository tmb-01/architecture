import React, {Component, useState} from 'react';
import StepsCard from "../../components/StepsCard";
import {Cards, CardsBox} from "./styles";

function Steps() {

    const [stepsText, setStepsText] = useState([
        {
            stepNumber: "01",
            title: "Schematic Design",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            bgColor: "var(--main-color)"
        }, {
            stepNumber: "02",
            title: "Documents",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            bgColor: "#F43702"
        }, {
            stepNumber: "03",
            title: "Construction",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            bgColor: "#292D33"
        }, {
            stepNumber: "04",
            title: "Build Construction",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            bgColor: "#545B65"
        },
    ])

    return (
        <CardsBox>
            <Cards>
                {stepsText.map(({stepNumber, title, description, bgColor}, index) =>
                    <StepsCard stepNumber={stepNumber} title={title} description={description} bgColor={bgColor}/>
                )
                }
            </Cards>
        </CardsBox>
    );
}

Steps.propTypes = {};

export default Steps;