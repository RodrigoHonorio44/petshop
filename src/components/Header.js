import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar
    style={{ backgroundColor: '#D63384' }}
    variant="light"
    expand="lg"
    sticky="top"
  >
    <Container>
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}
      >
        🐾 PetShop Feliz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={{ color: '#fff' }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/servicos" style={{ color: '#fff' }}>
            Serviços
          </Nav.Link>
          <Nav.Link as={Link} to="/produtos" style={{ color: '#fff' }}>
            Produtos
          </Nav.Link>
          <Nav.Link as={Link} to="/contato" style={{ color: '#fff' }}>
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
