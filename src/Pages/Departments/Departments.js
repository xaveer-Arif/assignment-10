import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Departments.css'
import depImg from '../../image/dep/young-female-doctor-posing-corridor-hospital.jpg'
import { Link } from 'react-router-dom';
import Department from '../Department/Department';

const Departments = () => {
    const [departments, setDepartments]  = useState([])
    useEffect( () => {
        fetch('/department.json')
        .then(res => res.json())
        .then(data => setDepartments(data))
    },[])
    return (
        <div>
        <div className = 'department'>

                
            <Row>
                <Col md ={12} sm ={12} lg ={6} className = ' dep-banner'>
                    <img className = 'w-100' src ={depImg} alt="" />

                </Col>
                    <Col md ={12} sm ={12} lg ={6} className = "text-start dep-bg">
                        <h2 className = 'text-white'>OUR PHILOSOPHY</h2>
                        <h5 className = 'text-white'>This is the subtitle for the heading</h5><br />
                        <p className = 'text-white fs-6'> 
                    Patients have an important role to play at each stage of their care and the five safety tips will serve to encourage them to be more involved in their health care. <br /><br />

                    Patients can do a lot of small things to make their health-care experience as safe as possible.<br /><br />

                    Hospitals are places of recovery and healing but there are also safety risks for patients, such as infections, falls and medication errors that can happen despite our best efforts.

                    </p>
                    <Link to = "/home">
                    <button className="btn btn-danger">Learn More</button>
                    </Link>
                    </Col>
                </Row>
           
        </div>

        {/* Hospital Departments */}
        <div className = " container">
            <div className = "hospital-dep">
            <h2 >HOSPITAL DEPARTMENTS</h2>
            <hr className = 'm-auto ' />
            </div>
            <Row xs={1} md={4} className="g-4">
                {
                    departments.map(department => <Department
                    key ={department.id}
                    department ={department}
                    ></Department>)
                }
            </Row>
        </div>
       
        </div>
    );
};

export default Departments;