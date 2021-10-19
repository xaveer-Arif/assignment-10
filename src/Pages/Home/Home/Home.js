import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Services from "../Services/Services";
import Treading from "../treading/Treading";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <h1 className="text-center mb-5">Services</h1>
      <Services></Services>
      <h1 className="text-center mb-5 mt-5">Treading</h1>
      <Treading></Treading>
      {/* <Service></Service> */}
      
    </div>
  );
};

export default Home;
