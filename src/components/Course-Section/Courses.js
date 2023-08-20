import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import courseImg1 from '../../assets/images/web-design.png';
import courseImg2 from '../../assets/images/graphics-design.png';
import courseImg3 from '../../assets/images/ui-ux.png';
import './Courses.css';
import CourseCard from './CourseCard';


const coursesData = [
    {
      id: "01",
      title: "Web Design BootCamp-2022 for Beginners",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3,
    },
  ];

const Courses = () => {
    return (
        <Container>
            <Row className='mx-2'>
                <Col lg="12" className='mb-5 '>
                    <div className='course__top d-flex justify-content-center align-items-center'>
                        <div className='course__top__left'>
                            <h2>Our Popular Courses</h2>
                            <p className='text-start'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit, Quae consectetur libero quod voluptatum ullam qula quas, vitae voluptatum recusdane
                            </p>
                        </div>
                        <div className='w-50 text-end'>
                            <button className='btn'>Save All</button>
                        </div>
                    </div>   
                </Col>
                {
                        coursesData.map((item, ind) => (
                            <Col lg="4" md="6">
                                <CourseCard key={item.ind} item={item} />
                            </Col>
                        ))
                    }
            </Row>
        </Container>
    )
}

export default Courses
