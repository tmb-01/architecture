import React, {useState} from "react"
import {Card, Cards, Icon, TeamBox, Text, Title} from "./styles";
import TeamImg from "../../assets/images/team.jpg"

import {ReactComponent as Building} from "../../assets/icons/building.svg"
import {ReactComponent as Planing} from "../../assets/icons/sketch.svg"
import {ReactComponent as AboutUs} from "../../assets/icons/hook.svg"


function Team() {

    const [cardInfo, setCardInfo] = useState([
        {
            icon: <Building/>,
            title: "BUILDING",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque earum expedita fugitiure natus quibusdam sunt vel?"
        }, {
            icon: <Planing/>,
            title: "PLANING",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque earum expedita fugitiure natus quibusdam sunt vel?"
        }, {
            icon: <AboutUs/>,
            title: "ABOUT US",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque earum expedita fugitiure natus quibusdam sunt vel?"
        },
    ])

    const CardBox = ({icon, title, text}) => (
        <Card>
            <Icon>
                {icon}
            </Icon>
            <Title>BUILDING</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque earum expedita
                fugitiure natus quibusdam sunt vel?</Text>
        </Card>
    )

    return (
        <TeamBox>
            <img src={TeamImg} alt=""/>
            <Cards>
                {cardInfo.map(({icon, title, text}) =>
                    <CardBox icon={icon} title={title} text={text}/>
                )}
            </Cards>
        </TeamBox>
    )
}


export default Team