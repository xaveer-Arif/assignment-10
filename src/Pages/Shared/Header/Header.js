import React from "react";
import './Header.css'
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const {user, logOut} = useAuth();

  return (



    <div className = 'responsive-nav '>
      
    
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand className = 'ms-4' href="#home">Med-Scape</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className = 'ms-auto'>
      <Nav.Link as = {Link} to="/home">Home</Nav.Link>
      <Nav.Link as = {Link} to="/services">Services</Nav.Link>
      <Nav.Link as = {Link} to="/departments">Departments</Nav.Link>
      <Nav.Link as = {Link} to="/about">About</Nav.Link>
     
      {
        user.email ? <Nav.Link as = {Link} to="/" onClick = {logOut} >Log Out</Nav.Link> : <Nav.Link  as = {Link} to="/login" className = 'me-2'>Log in</Nav.Link>
        
      }
      {user?.email && <Nav.Link>{user?.displayName}</Nav.Link>}
      
      {user.displayName && <Nav.Link><Image className = 'w-25' src={user?.reloadUserInfo?.photoUrl} alt="" roundedCircle  /></Nav.Link>}
      
    </Nav>
  </Navbar.Collapse>
 
</Navbar>
    </div>
    
  );
};

export default Header;
