import React  from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Service from '../Home/Service/Service';

const Details = () => {
  const {serviceId} = useParams();
//   console.log(service)

// useEffect(() => {
//     fetch("services.json")
//     .then(res => res.json())
//     .then(data => console.log(data))
// },[])
 
 
 
    return (
        <div>
            <h1>this is {serviceId}</h1>

        </div>
    );
};

export default Details;

