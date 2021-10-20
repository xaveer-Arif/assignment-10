import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Essentials.css'

const Essentials = () => {
    return (
        <div>
            <Carousel>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          /> */}
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          /> */}

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          /> */}
           <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Essentials;