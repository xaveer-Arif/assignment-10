import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Service from "../Service/Service";

const Services = () => {

  const [services] = useService();

  return (
    <div className = 'container'>
    
      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Service 
          key = {service.id}
          service={service}>
          </Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
