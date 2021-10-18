import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Service from "../Service/Service";

const Services = () => {
  // const [services, setServices] = useState([]);
  const [services] = useService();
  // useEffect(() => {
  //   fetch("./services.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  
//   const serviceHandler = (props) => {
//     console.log(props)
// }
  return (
    <div className = 'container'>
    {/* <h1>{services.length}</h1>
      {services.map(service => (
        <Service 
        service = {service}
        ></Service>
      ))} */}

      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Service 
          key = {service.id}
          // serviceHandler = {serviceHandler}
          service={service}>
          </Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
