import React from "react";
import Banner from "../Banner/Banner";
import Doctor from "../Doctor/Doctor";
import Services from "../Services/Services";
import Treading from "../treading/Treading";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-center mb-5">Services</h1>
      <Services></Services>
      <Treading></Treading>
      <Doctor></Doctor>
      

    </div>
  );
};

export default Home;
