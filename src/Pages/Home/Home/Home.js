import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Banner></Banner> */}
      <h1 className="text-center">Services</h1>
      <Services></Services>
      {/* <Service></Service> */}
    </div>
  );
};

export default Home;
