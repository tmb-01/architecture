import React from "react"
import {
    BoxBottom,
    BoxTop,
    GetInTouchBox,
    GetInTouchContainer,
    Icon,
    Input,
    Line,
    SubTitle,
    Text,
    Textarea,
    TextUnderIcon
} from "./styles";
// import {Container} from "../OurVision/styles";
import {Title} from "./styles";
import {ReactComponent as Map} from "../../assets/icons/map-marker-alt-solid.svg"
import {ReactComponent as Call} from "../../assets/icons/phone-alt-solid.svg"
import {ReactComponent as Clock} from "../../assets/icons/clock-solid.svg"
import Button from "../../components/Button";
import {Container} from "../../components/Container/styles";

// import {ReactComponent} from "react-scripts";


function GetInTouch() {
    return (
        <GetInTouchBox>
            <GetInTouchContainer>
                <BoxTop>
                    <Title>Get In Touch!</Title>
                    <Line/>
                    <SubTitle>
                        We are looking forward to start a project with you!
                    </SubTitle>
                    <Text>
                        Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet convallis erat. Class aptent
                        taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus nec dolor suscipit
                        faucibus.
                    </Text>
                </BoxTop>
                <BoxBottom>
                    <Icon>
                        <Map/>
                    </Icon>
                    <TextUnderIcon>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</TextUnderIcon>
                    <Icon>
                        <Call/>
                    </Icon>
                    <TextUnderIcon>
                        1 (234) 567-891 <br/>
                        1 (234) 987-654
                    </TextUnderIcon>
                    <Icon>
                        <Clock/>
                    </Icon>
                    <TextUnderIcon last>
                        Mon – Fri …… 10 am – 8 pm <br/>
                        Sat, Sun …… Closed
                    </TextUnderIcon>
                    {/*<Icon icon={Map}/>*/}
                    {/*<Icon icon={Call}/>*/}
                    {/*<Icon icon={Clock}/>*/}
                </BoxBottom>
                <BoxBottom>
                    <Input placeholder={"Enter your Name"}/>
                    <Input placeholder={"Enter a valid email address"}/>
                    <Textarea placeholder={"Enter your message"}/>
                    <Button text={"SUBMIT"}/>
                </BoxBottom>
            </GetInTouchContainer>
        </GetInTouchBox>
    )

}

export default GetInTouch