import React from 'react';
import { Button } from 'react-bootstrap';
import '../ContactUs/Contactus.css';
import social_icons from "../../assets/images/social_icons.svg";

const Contactus = () => {
    return (
        <>
            <div className='contactus__main-wrapper'>
                <div>
                    <div className='contactus_title'>DO YOU BELONG WITH US?</div>
                    <div className='contactus_caption'>Feel free to get in touch. If you are truly share the Discussion Box spirit, let’s chat!</div>
                </div>
                <Button className='contactus_btn'>Contact our team</Button>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='contact_block'>The why, how, what</div>
                <div className='contact_block'>Take your seat</div>
                <div className='contact_block'>Upcoming Discussions</div>
                <div className='contact_block'>Contact us</div>
                <div className='contact_block'><img src={social_icons} /></div>
                <div className='contact_block'>Our partners</div>
                <div className='contact_block'>About</div>
                <div className='contact_block'>Past Events</div>
                <div className='contact_block'>Blog</div>
                <div className='contact_block'>Privacy & Cookies</div>
            </div>
        </>
    )
}

export default Contactus