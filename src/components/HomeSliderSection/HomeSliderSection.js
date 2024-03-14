import React from 'react'
import Slider from "react-slick";
import '../HomeSliderSection/homeslidersection.css';

const HomeSliderSection = () => {
    var settings = {
        dots: false,
        // className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        centerPadding: "10px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
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
        <div className='homeslidersection__main-wrapper'>
            <Slider {...settings}>
                <div>
                    <h3 className='slider__quotes'>A BUSINESS PROUDLY RUN BY A TEAM OF <span> DIVERSE WOMEN. </span></h3>
                </div>
                <div>
                    <h3 className='slider__quotes'>A BUSINESS PROUDLY RUN BY A TEAM OF <span> DIVERSE WOMEN.</span></h3>
                </div>
                <div>
                    <h3 className='slider__quotes'>A BUSINESS PROUDLY RUN BY A TEAM OF <span> DIVERSE WOMEN.</span></h3>
                </div>
            </Slider>
        </div>
    )
}

export default HomeSliderSection