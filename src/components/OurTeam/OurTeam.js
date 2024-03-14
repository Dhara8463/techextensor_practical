import React from 'react';
import '../OurTeam/ourteam.css';
import TeamMembers from './TeamMembers';
import { OurteamData } from '../../assets/_arrays/OurteamData';
import { Container, Row, Col } from 'react-bootstrap';


const OurTeam = () => {
    return (
        <div className='ourteam__main-wrapper'>
            <div className='ourteam_wrapper-title'>MEET THE TEAM</div>
            <div className='ourteam__caption'>With our hearts and headquarters in Bristol, we are powered by diversity and committed to creating a more inclusive world, one discussion at a time.</div>

            <Container className='ourteam__employedata_wrapper'>
                <Row style={{ rowGap: "100px" }}>
                    {
                        OurteamData.map((data) => (
                            <Col md={4}>
                                <TeamMembers image={data.img} name={data.name} gender={data.gender} p_1={data.p_1} p_2={data.p_2} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default OurTeam