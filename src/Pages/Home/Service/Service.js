import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
    const { img, name, discription } = service;
  console.log(service.id);
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
              <button className = 'btn btn-danger'>Add to cart</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default Service;
