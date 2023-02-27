import React from 'react'
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import aboutImg from '../../assets/images/about-us.png';


const AboutUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <img src={aboutImg} alt="" className="w-100"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs
