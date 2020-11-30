import React from "react"
import {
    DreamHomeBgImg,
    DreamHomeBox,
    DreamHomeCol, DreamHomeContainer,
    DreamHomeDescription,
    DreamHomeText,
    DreamHomeTitle
} from "./styles";
import Img from "../../assets/images/man-with-wooden-home.jpg"
import Button from "../../components/Button";

function DreamHome() {
    return (
        <DreamHomeBox>
            <DreamHomeContainer>
                <DreamHomeCol>
                    <DreamHomeText>
                        <p>create your</p>
                        <DreamHomeTitle>Dream Home</DreamHomeTitle>
                        <DreamHomeDescription>
                            We are founded on the belief that our collaborative nature and the journey we take with our
                            clients is reflected in every project by creating exciting, functional, modern spaces.
                        </DreamHomeDescription>
                        <Button text={"START NOW"}/>
                    </DreamHomeText>
                </DreamHomeCol>
                <DreamHomeCol last>
                    <DreamHomeBgImg/>
                        {/*<img src={Img} alt=""/>*/}
                    {/*</DreamHomeBgImg>*/}
                </DreamHomeCol>
            </DreamHomeContainer>
        </DreamHomeBox>
    )
}

export default DreamHome