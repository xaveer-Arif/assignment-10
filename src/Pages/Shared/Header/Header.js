import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebse";

const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user)
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>MedScape</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as = {Link} to="/home">Home</Nav.Link>
            <Nav.Link as = {Link} to="/services">Services</Nav.Link>
            <Nav.Link as = {Link} to="/departments">Departments</Nav.Link>
            <Nav.Link as = {Link} to="/about">About Us</Nav.Link>
            <span><p></p></span>
            {/* <Nav.Link href="/details">Details</Nav.Link> */}
            {/* <Nav.Link href="/login">Log in</Nav.Link> */}
            {
              user.email ? <Nav.Link as = {Link} to="/" onClick = {logOut} >Log Out</Nav.Link> : <Nav.Link  as = {Link} to="/login">Log in</Nav.Link>
              
            }
            <Navbar className = 'text-white'>{user.displayName}</Navbar>
           
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
