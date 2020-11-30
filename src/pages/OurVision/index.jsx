import {
    BgImg1, BgImg2,
    Col,
    ConstructionServices,
    Container, LearnMore,
    ListTitle,
    OurVisionBox, OurVisionContainer,
    OurVisionText,
    OurVisionTopText,
    Ulist
} from "./styles";

function OurVision() {
    return (
        <OurVisionBox>
            <OurVisionContainer>
                <Col>
                    <OurVisionText>
                        <OurVisionTopText>
                            OUR VISION
                        </OurVisionTopText>
                        <ConstructionServices>
                            Construction Services
                        </ConstructionServices>
                        <ListTitle>
                            We have gained experience in most major market segments, including:
                        </ListTitle>
                        <Ulist>
                            <li>Data Centres</li>
                            <li>Commercial Interiors</li>
                            <li>Financial Centres</li>
                            <li>Retail</li>
                            <li>Hospitality</li>
                            <li>Sports</li>
                            <li>Manufacturing</li>
                        </Ulist>
                        <LearnMore>LEARN MORE</LearnMore>
                    </OurVisionText>
                </Col>
                <Col>
                    <BgImg1/>
                </Col>
                <Col last>
                    <BgImg2 first/>
                    <BgImg2/>
                </Col>
            </OurVisionContainer>
        </OurVisionBox>
    )
}

export default OurVision