import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../FeaturesSection/featuressection.css';

const FeaturesSection = () => {
    return (
        <Container className='featuressection__main--wrapper' style={{ position: 'relative' }}>
            <Row>
                <Col>
                    <div className='features__points features__points1'>Grow your industry presence <span> through meaningful networking.</span></div>
                </Col>
                <Col>
                    <div className='features__points features__points2'>Harness <span> inspiring digital discussions </span> to drive reliable business growth.</div>
                </Col>
                <Col>
                    <div className='features__points features__points2'>Open the door to <span>  genuine relationships </span> with C-Level executives and peers.</div>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturesSection