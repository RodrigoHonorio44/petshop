import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import Header from '../components/Header';  // ajuste o caminho conforme sua estrutura
import Footer from '../components/Footer';  // ajuste o caminho conforme sua estrutura

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = 'Por favor, insira seu nome.';
    if (!formData.email.trim()) newErrors.email = 'Por favor, insira seu email.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido.';
    if (!formData.telefone.trim()) newErrors.telefone = 'Por favor, insira seu telefone.';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Por favor, escreva uma mensagem.';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: null })); // limpa erro ao digitar
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simula envio (aqui você pode integrar com backend)
    setShowAlert(true);
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    setErrors({});

    setTimeout(() => setShowAlert(false), 4000);
  };

  const isFormValid = Object.values(formData).every(field => field.trim() !== '');

  return (
    <>
      <Header />

      <Container className="py-5" style={{ minHeight: '70vh' }}>
        <h2 className="mb-4" style={{ color: '#D63384', fontWeight: 'bold' }}>Contato</h2>
        <Row>
          <Col md={6}>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  isInvalid={!!errors.nome}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nome}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="telefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  isInvalid={!!errors.telefone}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.telefone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="mensagem">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui"
                  isInvalid={!!errors.mensagem}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mensagem}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                style={{ backgroundColor: '#D63384', border: 'none' }}
                disabled={!isFormValid}
              >
                Enviar
              </Button>
            </Form>

            {showAlert && (
              <Alert variant="success" className="mt-3">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </Alert>
            )}
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <h5><FaPhoneAlt className="me-2" />Telefone</h5>
            <p>(21) 99999-9999</p>

            <h5><FaEnvelope className="me-2" />Email</h5>
            <p>contato@petshopfeliz.com.br</p>

            <h5><FaMapMarkerAlt className="me-2" />Endereço</h5>
            <p>Rua das Flores, 123 - Bairro Jardim, Rio de Janeiro - RJ</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Contato;
