import React from 'react';
import './Treading.css'
import { Card, Col, Row } from 'react-bootstrap';


const Treading = () => {
    return (
        <div className ='treading '>
       

            <h1 className="text-start ms-5 mb-3 mt-5">Treading</h1> 
            <Row className = 'pb-5 g-3 ms-5 me-5'>
                <Col sm= {6} md= {3}>
                <Card className = 'card-hover'>
                    <Card.Body>
                        <Card.Title> <h1>1</h1> </Card.Title>
                            <Card.Text>
                               <h4 className = 'card-text'> Its Okay for Docs to Refuse to Treat Unvaccinated Patients</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col sm= {6} md= {3} >
                <Card className = 'card-hover'>
                    <Card.Body>
                        <Card.Title> <h1>2</h1> </Card.Title>
                        <Card.Text>
                               <h4 className = 'card-text'>Family Herd Immunity: Study Shows Dramatic Protection</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col sm= {6} md= {3}>
                <Card className = 'card-hover'>
                    <Card.Body>
                        <Card.Title> <h1>3</h1> </Card.Title>
                        <Card.Text>
                               <h4 className = 'card-text'>Failure to Communicate 'Doc-to-Doc' Blamed for Patient's Deat</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col sm= {6} md= {3}>
                <Card className = 'card-hover'>
                    <Card.Body>
                        <Card.Title> <h1>4</h1> </Card.Title>
                        <Card.Text>
                               <h4 className = 'card-text'>Many Scientists Face Serious Threats for Speaking About COVID</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
               
                {/* </Col>
                <Col sm= {6} md= {3} className = ''>
                <Card className = 'card-hover'>
                    <Card.Body className = 'pb-4'>
                    <Card.Title> <h1>4</h1> </Card.Title>
                    <Card.Text>
                               <h5 className = 'card-text'>Failure to Communicate 'Doc-to-Doc' Blamed for Patient's Deat</h5>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col> */}
                {/* <Col sm= {4} md= {2}>
                <Card>
                    <Card.Body>
                    <Card.Title> <h1>4</h1> </Card.Title>
                    <Card.Text>
                               <h4 className = 'text-dark'>Failure to Communicate 'Doc-to-Doc' Blamed for Patient's Deat</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col> */}
            </Row>
           
        </div>
    );
};

export default Treading;