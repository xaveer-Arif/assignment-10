import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
// import { useParams } from 'react-router-dom';
import useService from '../../../Hooks/useService';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [services, setServices] = useState([])
    const [service, setService] = useState([])
   useEffect(() => {
       fetch("/services.json")
       .then(response => response.json())
       .then(data => setServices(data))
   },[])
  
   useEffect(() => {
       const singleDetails = services.find(service => service.id === serviceId)
       setService(singleDetails)
   },[services])
    return (

        <div>
            
            <Row>
           <Col md= {6} >
          <Card>
            <Card.Img variant="top" src={service?.img} />
            <Card.Body>
              <Card.Title>{service?.name}</Card.Title>
              <Card.Text>
               {service?.discription}
              </Card.Text>
              
               <button  className = 'btn btn-danger'>Details</button>
              
             
              {/* <button onClick = {() => serviceHandler(service)} className = 'btn btn-danger'>Add to cart</button> 
              */}
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
    );
};

export default ServiceDetails;