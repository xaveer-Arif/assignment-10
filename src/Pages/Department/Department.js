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
              
              {/* <Link to = {`details/${id}`}>
              <button  className = 'btn btn-danger'>Add to cart</button>
              </Link>  */}
             
              {/* <button onClick = {() => serviceHandler(service)} className = 'btn btn-danger'>Add to cart</button> 
              */}
            </Card.Body>
          </Card>
        </Col>
      ))}
        </div>
    );
};

export default Department;