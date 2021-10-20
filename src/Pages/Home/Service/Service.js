import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const {service, serviceHandler } = props
    const { img, name, discription, id } = service;
  
  return (
    <div>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={service?.img} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>
               {service.discription}
              </Card.Text>
              
              <Link to = {`details/${id}`}>
              <button  className = 'btn btn-danger'>Details</button>
              </Link> 
             
              {/* <button onClick = {() => serviceHandler(service)} className = 'btn btn-danger'>Add to cart</button> 
              */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default Service;
