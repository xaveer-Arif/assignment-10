import React from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Delete from "../../delete/Delete";

import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Doctor from "../Doctor/Doctor";
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
      {/* <h1 className="text-center mb-5 mt-5">Treading</h1> */}
      <Treading></Treading>
      {/* <Service></Service> */}
      {/* <h1 className="text-center mb-5 mt-5">Contact Us</h1>
      <ContactUs></ContactUs> */}
      {/* <Essentials></Essentials> */}
      <Doctor></Doctor>
      

    </div>
  );
};

export default Home;
