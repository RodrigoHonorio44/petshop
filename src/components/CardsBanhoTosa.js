// src/components/CardsBanhoTosa.js
import React from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';

const petsData = [
  {
    id: 1,
    name: 'Bob',
    photo: 'https://place-puppy.com/300x300', // substitua pela URL real da foto
    description: 'Tosa completa e banho relaxante',
  },
  {
    id: 2,
    name: 'Luna',
    photo: 'https://placedog.net/300/300?id=2',
    description: 'Tosa higiênica e corte estilizado',
  },
  {
    id: 3,
    name: 'Tobby',
    photo: 'https://placedog.net/300/300?id=3',
    description: 'Banho com hidratação especial',
  },
  {
    id: 4,
    name: 'Mimi',
    photo: 'https://placedog.net/300/300?id=4',
    description: 'Tosa padrão e escovação',
  },
  // Adicione mais pets conforme necessário
];

const CardsBanhoTosa = () => {
  const chunkSize = 3;
  const slides = [];

  for (let i = 0; i < petsData.length; i += chunkSize) {
    slides.push(petsData.slice(i, i + chunkSize));
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Animais que já fizeram Banho e Tosa</h2>
      <Carousel indicators={false} interval={5000} pause="hover">
        {slides.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map(pet => (
                <Col key={pet.id} md={4} className="d-flex justify-content-center">
                  <Card style={{ width: '18rem' }} className="mb-3 shadow-sm">
                    <Card.Img variant="top" src={pet.photo} alt={pet.name} />
                    <Card.Body>
                      <Card.Title>{pet.name}</Card.Title>
                      <Card.Text>{pet.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CardsBanhoTosa;
