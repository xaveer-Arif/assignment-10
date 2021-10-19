import React from 'react';
import './About.css'
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div >
            <div className="about-section mb-5">
            
            <div>
            <h1 className = 'container text-start pt-5 display-4  about-heading'>About Us</h1>
            <h5 className = "container text-start about-title">We offer physical therapy services since 1996</h5>
            </div>
            
            </div>
            <div className = " container text-start">
            <Row>
                <Col md = {4}>
                    <h1><span>Our </span><span className = "about-heading">Vision</span></h1>
                    <p  className = "fs-5">To be a company that attracts, rewards, and retains highly skilled physical therapy staff. Our proactive approach to the development of best business practices and promotion of effective treatment methods will help us accomplish this.</p>
                    <br />
                    <h1><span>Our </span><span className = "about-heading">Philosophy</span></h1>
                    <p className = "fs-5">Physio Physical Therapy is committed to providing high quality outpatient physical therapy services in beautiful state-of-the-art facilities.As a healthcare leader we partner with groups and events within the communities we serve. Our focus on our physical therapists continuing education is unmatched and guarantees our physical therapists understand and put into practice cutting-edge treatments and rehabilitation techniques available for all types of injuries and conditions.</p>
                </Col>
                <Col md = {4}>
                    <h1><span>Our </span><span className = "about-heading">Mission</span></h1>
                    <p className = "fs-5">We are committed as primary healthcare professionals to help our clients resume their lifelong pursuit of health, fitness, and well-being.</p>
                    <h5>High Quality</h5>
                    <p>We take a goal-oriented approach to healing. Whatever your goals might be we want to help you achieve them</p>
                    <h5>Patient Care</h5>
                    <p>We’ll provide hands-on treatment in the office and education you can take home with you, enabling you to become an active participant in your recovery and future physical health.</p>
                    <h5 >Professional Service</h5>
                    <p>Our five physical therapists have a combined 120 years of clinical experience and a shared passion for helping our community stay active.</p>
                </Col>
                <Col md = {4}>
                    <img className = "w-100" src= "https://demos.qreativethemes.com/physio/wp-content/uploads/sites/3/2015/11/about_us.jpg" alt="" />
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default About;