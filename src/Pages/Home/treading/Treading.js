import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Treading = () => {
    return (
        <div>
            <div className = 'bg-light'>
            <Row>
                <Col md= {3}>
                <Card>
                    <Card.Body>
                        <Card.Title> <h1>1</h1> </Card.Title>
                            <Card.Text>
                               <h4 className = 'text-dark'> Its Okay for Docs to Refuse to Treat Unvaccinated Patients</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col md= {3}>
                <Card>
                    <Card.Body>
                        <Card.Title> <h1>2</h1> </Card.Title>
                        <Card.Text>
                               <h4 className = 'text-dark'>Family Herd Immunity: Study Shows Dramatic Protection</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col md= {3}>
                <Card>
                    <Card.Body>
                        <Card.Title> <h1>3</h1> </Card.Title>
                        <Card.Text>
                               <h4 className = 'text-dark'>Failure to Communicate 'Doc-to-Doc' Blamed for Patient's Deat</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col md= {3}>
                <Card>
                    <Card.Body>
                    <Card.Title> <h1>4</h1> </Card.Title>
                    <Card.Text>
                               <h4 className = 'text-dark'>Failure to Communicate 'Doc-to-Doc' Blamed for Patient's Deat</h4>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Treading;