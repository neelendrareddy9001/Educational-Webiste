import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import courseImg1 from '../../assets/images/web-design.png';
import courseImg2 from '../../assets/images/graphics-design.png';
import courseImg3 from '../../assets/images/ui-ux.png';
import './Courses.css';
import CourseCard from './CourseCard';


const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <div className='course__top d-flex justify-content-between align-items-center'>
                        <div className='course__top__left w-50'>
                            <h2>Our Popular Courses</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                                consequatur libero quod voluptatibus ullam quia quas, vitae
                                voluptatem recusandae reprehenderit!
                            </p>
                        </div>
                        <div className='w-50 text-end'>
                            <button className='btn'>See All</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Courses
