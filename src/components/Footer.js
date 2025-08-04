import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ backgroundColor: '#D63384' }} className="text-white py-4">
    <Container>
      <Row className="text-center text-md-left">
        <Col md={6} className="mb-3 mb-md-0">
          <h5 className="mb-3">PetShop Feliz</h5>
          <p>© 2025 PetShop Feliz - Todos os direitos reservados</p>
        </Col>
        <Col md={6}>
          <h5 className="mb-3">Contato</h5>
          <p><FaPhoneAlt className="me-2" /> (21) 99999-9999</p>
          <p><FaEnvelope className="me-2" /> contato@petshopfeliz.com.br</p>
          <p><FaMapMarkerAlt className="me-2" /> Av. das Flores, 123 - Centro, RJ</p>
          <p>
            <a
              href="https://www.instagram.com/seuinstagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              <FaInstagram className="me-2" /> @petshopfeliz
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
