import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDog, FaPaw, FaStethoscope } from 'react-icons/fa';
import { GiCat, GiEagleEmblem } from 'react-icons/gi';
import { MdOutlinePets, MdOutlineMonitorHeart } from 'react-icons/md';

const servicosVeterinarios = [
  {
    titulo: 'Atendimento para Cães',
    descricao: 'Consultas clínicas gerais, vacinas e cuidados preventivos para seu cãozinho.',
    icone: <FaDog size={40} />,
    mensagem: 'Olá! Gostaria de agendar um atendimento veterinário para meu cachorro.',
  },
  {
    titulo: 'Atendimento para Gatos',
    descricao: 'Cuidados especializados com felinos, incluindo vermifugação e exames de rotina.',
    icone: <GiCat size={40} />,
    mensagem: 'Olá! Gostaria de agendar um atendimento veterinário para meu gato.',
  },
  {
    titulo: 'Animais Silvestres',
    descricao: 'Veterinários especializados no cuidado com animais silvestres e exóticos.',
    icone: <GiEagleEmblem size={40} />,
    mensagem: 'Olá! Tenho um animal silvestre e gostaria de atendimento especializado.',
  },
  {
    titulo: 'Exames de Imagem',
    descricao: 'Ultrassonografia e outros exames com tecnologia moderna para diagnóstico preciso.',
    icone: <MdOutlineMonitorHeart size={40} />,
    mensagem: 'Olá! Gostaria de agendar exames de imagem para meu pet.',
  },
  {
    titulo: 'Cirurgias e Internação',
    descricao: 'Estrutura completa para cirurgias e cuidados intensivos com monitoramento.',
    icone: <FaStethoscope size={40} />,
    mensagem: 'Olá! Quero saber mais sobre cirurgias e internação para pets.',
  },
  {
    titulo: 'Check-up Pet',
    descricao: 'Pacotes de check-up completo para cães, gatos e silvestres.',
    icone: <MdOutlinePets size={40} />,
    mensagem: 'Olá! Quero agendar um check-up completo para meu pet.',
  },
];

const Veterinario = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <h2 className="text-center mb-4">Atendimento Veterinário</h2>
        <Row className="g-4">
          {servicosVeterinarios.map((servico, index) => {
            const whatsappURL = `https://wa.me/5521999999999?text=${encodeURIComponent(servico.mensagem)}`;
            return (
              <Col key={index} md={6} lg={4}>
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <Card className="text-center border-0 shadow h-100 p-3 rounded-4 card-hover">
                    <div className="mb-3">{servico.icone}</div>
                    <Card.Title>{servico.titulo}</Card.Title>
                    <Card.Text>{servico.descricao}</Card.Text>
                  </Card>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />

      {/* Estilo customizado inline para hover e zoom */}
      <style>{`
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
};

export default Veterinario;
