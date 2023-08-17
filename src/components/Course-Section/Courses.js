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
            <Row>
                <Col lg="4">
                    {/* <div className='single__course__item'>
                        <div className='course__img'>
                            <img src={courseImg1} alt=' ' className='w-100' />
                        </div>

                        <div className='course__details'>
                            <h6 className='course__title mb-4'>
                                Web Design Bootcamp-2022 for Beginners
                            </h6>

                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='lesoon d-flex align-items-center gap-1'>
                                    <i className='ri-book-open-line'></i>12 Lessons
                                </p>

                                <p className='students d-flex align-items-center gap-1'>
                                    <i className='ri-user-line'></i>12.5k
                                </p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='rating d-flex align-items-center gap-1'>
                                    <i className='ri-star-fill'></i>5.9k
                                </p>

                                <p className='enroll d-flex align-items-center gap-1'>
                                    <a href='#'>Enroll Now</a>
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {
                        coursesData.map((item) => {
                            <Col lg="4" md="6">
                                <CourseCard key={item.id} item={item} />
                            </Col>
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Courses
