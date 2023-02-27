import React from 'react'
import './Hero-section.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/hero-img1.png';


const HeroSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className='hero__center'>
                            <h2 className='mb-4'>Anytime Anywere <br/> Learn on your <br/>Suitable Schedule</h2>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                                quas officiis et repellat!</p>
                            <div className='search'>
                                <input type="text" placeholder='Serch'/>
                                <button className='btn'>Search</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <img src={heroImg} alt="" className='w-100'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection