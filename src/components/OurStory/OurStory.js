import React from 'react';
import '../OurStory/ourstory.css';
import spotlight_dark from '../../assets/images/spotlight_dark.svg';
import ourstory_bg from "../../assets/images/ourstory_bg.svg";
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

const OurStory = () => {
    var settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerPadding: "80px",
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='ourstory__main-wrapper'>
            <img src={spotlight_dark} alt=" spotlight_dark" className='spotlight_dark' />
            <img src={ourstory_bg} alt="ourstory_bg" className='ourstory_bg' />
            <Container>
                <Row className='ourstory__describe_wrapper'>
                    <div className='ourstory__title'>OUR STORY</div>
                    <Col>
                        <div className='ourstory ourstory_1'>Discussion Box was born and raised in the Digital era, which saw (and still sees!) increasing demand for business expansion beyond traditional means.</div>
                    </Col>
                    <Col>
                        <div className='ourstory ourstory_2'>Founded by serial entrepreneur and mum of 3 Lisa-Marie Carter, The Spotlight Experience aims to connect important decision-makers and leading global brands, through meaningful online discussions.</div>
                    </Col>
                    <Col>
                        <div className='ourstory ourstory_3'>Driven by the goal to reduce unnecessary world-travel and improve accessibility in the events space, Discussion Box was built to be different.</div>
                    </Col>
                </Row>
            </Container>
            <div className='ourstory__main-wrapper_slider'>
                <Slider {...settings}>

                    <div className='ourstory__slider__quotes'>VIRTUAL EVENTS WITH A <span>  HUMAN TOUCH. </span></div>

                    <div className='ourstory__slider__quotes'>VIRTUAL EVENTS WITH A <span>  HUMAN TOUCH. </span></div>

                    <div className='ourstory__slider__quotes'>VIRTUAL EVENTS WITH A <span>  HUMAN TOUCH. </span></div>
                </Slider>
            </div>
        </div>
    )
}

export default OurStory