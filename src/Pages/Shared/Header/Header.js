import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebse";

const Header = () => {
  const {user, logOut} = useAuth();
  // console.log(user)
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/details">Details</Nav.Link>
            {/* <Nav.Link href="/login">Log in</Nav.Link> */}
            {
              user.email ? <Nav.Link onClick = {logOut} href="/">Log Out</Nav.Link> : <Nav.Link href="/login">Log in</Nav.Link>

            }
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
