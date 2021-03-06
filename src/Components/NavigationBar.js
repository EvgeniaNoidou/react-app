import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#deets">More deets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
