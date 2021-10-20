import React from "react";
import './Header.css'
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebse";

const Header = () => {
  const {user, logOut} = useAuth();
  console.log("user" ,user)
  console.log(user?.reloadUserInfo?.photoUrl)
  return (



    <div className = 'responsive-nav '>
    
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand className = 'ms-2' href="#home">Med-Scape</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className = 'ms-auto'>
      <Nav.Link as = {Link} to="/home">Home</Nav.Link>
      <Nav.Link as = {Link} to="/services">Services</Nav.Link>
      <Nav.Link as = {Link} to="/departments">Departments</Nav.Link>
      <Nav.Link as = {Link} to="/about">About</Nav.Link>
     
      {/* <Navbar className = 'text-white'>{user.displayName}</Navbar> */}
      {
        user.email ? <Nav.Link as = {Link} to="/" onClick = {logOut} >Log Out</Nav.Link> : <Nav.Link  as = {Link} to="/login">Log in</Nav.Link>
        
      }
      {user.displayName && <Nav.Link as = {Link} to="/about">{user.displayName}</Nav.Link>}
      {user.displayName && <Nav.Link className = 'reduce-padding' as = {Link} to="/about"><Image className = 'w-25' src={user?.reloadUserInfo?.photoUrl} alt="" roundedCircle  /></Nav.Link>}
    </Nav>
  </Navbar.Collapse>
 
</Navbar>
    </div>
    // <div>

    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand>MedScape</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Nav className="ms-auto">
    //         <Nav.Link as = {Link} to="/home">Home</Nav.Link>
    //         <Nav.Link as = {Link} to="/services">Services</Nav.Link>
    //         <Nav.Link as = {Link} to="/departments">Departments</Nav.Link>
    //         <Nav.Link as = {Link} to="/about">About Us</Nav.Link>
            
    //         {/* <Nav.Link href="/details">Details</Nav.Link> */}
    //         {/* <Nav.Link href="/login">Log in</Nav.Link> */}
    //         {
    //           user.email ? <Nav.Link as = {Link} to="/" onClick = {logOut} >Log Out</Nav.Link> : <Nav.Link  as = {Link} to="/login">Log in</Nav.Link>
              
    //         }
    //         <Navbar className = 'text-white'>{user.displayName}</Navbar>
           
            
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </div>
  );
};

export default Header;
