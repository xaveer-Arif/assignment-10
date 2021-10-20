import React from "react";
import './Banner.css'
import { Carousel } from "react-bootstrap";
import banner1 from '../../../image/banner-img/5075916.png'
import banner2 from '../../../image/banner-img/5272872.png'


const Banner = () => {
  return (
    <div className = 'mb-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block banner-size w-100"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block banner-size w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
