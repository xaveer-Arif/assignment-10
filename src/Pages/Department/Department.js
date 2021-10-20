import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Department.css'

const Department = ({department}) => {
   const  {img, name, details} = department; 
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className = "text-start">
            <Card.Img variant="top" src = {img} />
            <Card.Body>
              <Card.Title className = 'fs-5 title-text'>{name}</Card.Title>
              <Card.Text>
               {details}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
        </div>
    );
};

export default Department;