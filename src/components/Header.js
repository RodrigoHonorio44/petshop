import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const Header = () => (
  <Navbar
    style={{ backgroundColor: '#D63384' }}
    variant="dark"
    expand="lg"
    sticky="top"
  >
    <Container>
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', ...linkStyle }}>
        🐾 PetShop Feliz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={linkStyle}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/servicos" style={linkStyle}>
            Serviços
          </Nav.Link>
          <Nav.Link as={Link} to="/produtos" style={linkStyle}>
            Produtos
          </Nav.Link>
          <Nav.Link as={Link} to="/contato" style={linkStyle}>
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
