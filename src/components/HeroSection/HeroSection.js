import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import '../HeroSection/herosection.css';
import spotlightimg from "../../assets/images/spotlight_img.svg";
import social_icons from "../../assets/images/social_icons.svg";
const HeroSection = () => {
    return (
        <div className='herosection_container'>
        <Container >
            <Row>
                <Col md={6} style={{ position: 'relative' }}>
                    <div className='herosection_title'>GIVING <span> GLOBAL BRANDS </span>A SEAT AT THE TABLE</div>
                    <img src={social_icons} className='social_icons'/>
                    <div className='radialgradient_circle1'></div>
                </Col>
                <Col md={6} style={{ position: 'relative' }}>
                    <img src={spotlightimg} alt='spotlightimg' className='spotlightimg' />
                    <div className='radialgradient_circle2'></div>
                    <Button className='ctm_btn'>Learn more</Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default HeroSection