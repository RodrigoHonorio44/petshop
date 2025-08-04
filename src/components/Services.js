import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BanhoETosa from './BanhoETosa';
import AtendimentoVeterinario from './AtendimentoVeterinario';
import ProdutosPetCard from './ProdutosPetCard';

const services = [
  { title: 'Banho e Tosa', component: <BanhoETosa /> },
  { title: 'Veterinário', component: <AtendimentoVeterinario /> },
  { title: 'Produtos Pet', component: <ProdutosPetCard /> },
];

const Services = () => (
  <Container id="servicos" className="my-5">
    <h2 className="text-center mb-3">Nossos Serviços</h2>
    <p className="text-center lead mb-5">
      A petZilla trabalha com os melhores produtos e profissionais para garantir um tratamento exclusivo e especial para o seu pet.
    </p>
    <Row className="g-4"> {/* g-4 adiciona espaçamento entre colunas e linhas */}
      {services.map((service, index) => (
        <Col xs={12} md={4} key={index}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title style={{ color: '#D63384' }}>{service.title}</Card.Title>
              {service.component ? (
                service.component
              ) : (
                <Card.Text>{service.desc}</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Services;
