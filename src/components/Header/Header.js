import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoPersonOutline } from "react-icons/io5";
import { Button } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import '../Header/header.css';

const Header = () => {
    const location = useLocation();

    // Check if the current location is the About page
    const isAboutPage = location.pathname === '/about';
    return (
        <Navbar collapseOnSelect expand="xxxl" className={isAboutPage ? "bg__black navbar_dark" : "bg-body-tertiary navbar_light"}>
            <Container>
                <div className='d-flex'>
                    <Navbar.Brand href="/">
                        <div className={isAboutPage ? "logo_wrapper_dark" : "logo_wrapper"}>
                            discussi<span></span>n b<span></span>x
                        </div>
                    </Navbar.Brand>
                    <div className={isAboutPage ? "vertical-line-dark" : "vertical-line-light"}></div>
                    <div className='caption_wrapper'>
                        The Spotlight Experience
                    </div>
                    <div className={isAboutPage ? "vertical-line-dark" : "vertical-line-light"}></div>
                </div>
                <div className='d-flex align-items-center'>

                    {
                        isAboutPage ? (<Nav>
                            <div className='login_button'>Log in</div>
                        </Nav>) :
                            (<Nav>
                                <Button className='profile_btn'><IoPersonOutline />
                                    Lisa-Marie Carter</Button>
                            </Nav>)
                    }

                    <div className={isAboutPage ? "vertical-line-dark" : "vertical-line-light"}></div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
            </Container>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto about_navbar">
                    <Nav.Link as={Link} to="/about" className='about_link'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header