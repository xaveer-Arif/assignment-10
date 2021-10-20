import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../image/mscp-logo.webp'



const Footer = () => {
    return (

        <div className = 'footer pt-5'>
            <div className = ''>
                
            <Row>
                
                <Col xm = {2} md = {3} className = ' ms-5 text-start' >
                     <img className = 'mb-3 footer-logo img-fluid' src={logo} alt="" />
                    <h5 className ='mb-3'>FIND US ON</h5>
                    
                </Col>
               
                <Col xm = {1} md = {2} className = 'footer-border text-start'>
                    <h5>About</h5>
                    <ul >
                        <li>About Medscape</li>
                        <li>Privacy Polic</li>
                        <li>Editorial Policy</li>
                        <li>Cookies</li>
                        <li>Terms of Use</li>
                        <li>Advertising Policy</li>
                        <li>Help Center</li>
                    </ul>
                </Col>
                <Col xm = {1} md = {2} className = 'footer-border text-start'>
                    <h5>MEMBERSHIP</h5>

                    <ul>
                        <li>Become a Member</li>
                        <li>About Youli</li>
                        <li>Professional Information</li>
                        <li>Newsletters & Alerts</li>
                    </ul>
                </Col>
                <Col xm = {1} md = {2}  className =  'footer-border text-start'>
                    <h5>APPS</h5>
                    <ul>
                        <li>Medscape</li>
                        <li>CME & Education</li>
                     
                    </ul>
                </Col>
                <Col xm = {1} md  = {2} className = 'footer-border text-start'>
                    <h5>WEBMD NETWORK</h5>
                    <ul>
                        <li>Medscape Live Events</li>
                        <li>WebMD</li>
                        <li>MedicineNet</li>
                        <li>eMedicineHealth</li>
                        <li>RxList</li>
                        <li>WebMD Corporate</li>
                    </ul>
                </Col>
               
            </Row>
            </div>
        </div>
    );
};

export default Footer;