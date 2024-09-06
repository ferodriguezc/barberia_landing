
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className=' mb-5'>
      <Container> {/* Usamos Container para limitar el ancho y centrar */}
        <Navbar.Brand href="#home">Nombre Barberia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Conócenos</Nav.Link>
            <Nav.Link href="#service">Servicios</Nav.Link>
            <Nav.Link href="#portafolio">Portafolio</Nav.Link>
            <Nav.Link href="#contact">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

