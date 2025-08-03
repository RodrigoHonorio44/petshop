import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import CardsBanhoTosa from '../components/CardsBanhoTosa'; // <-- importação adicionada
import hydraPet from '../assets/estetica.png';
import tosaImage from '../assets/Corte.png';
import Footer from '../components/Footer';


const TosaEBanho = () => {
  const openWhatsApp = () => {
    const phone = '5521999999999'; // seu número com DDD e código do país
    const message = 'Olá! Gostaria de agendar um banho e tosa para meu pet no Pet Shop Feliz!';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />

      <section id="tosaebanho" className="py-5" style={{ backgroundColor: '#FFF0F5' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={hydraPet}
                alt="Cachorro com produtos Hydra"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={6}>
              <h2 className="mb-4" style={{ color: '#D63384' }}>
                🛁 Centro de Estética
              </h2>
              <p style={{ fontSize: '1.1rem' }}>
                Aqui no <strong>Petshop Feliz</strong>, seu pet será tratado como rei! Com o catálogo de produtos da <strong>Hydra</strong>, o banho e tosa ganham um novo significado.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                O melhor para o seu companheiro está aqui!
              </p>
              <p className="text-muted mt-4" style={{ fontSize: '0.95rem' }}>
                *serviços deverão ser agendados previamente
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: '#FFEFF7' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4" style={{ color: '#D63384' }}>
                🐶✨ Pet Shop Feliz – Onde Seu Pet é Mais Feliz! ✨🐱
              </h2>
              <p style={{ fontSize: '1.1rem' }}>
                No <strong>Pet Shop Feliz</strong>, cuidamos do seu pet com carinho, qualidade e dedicação!
                Aqui, seu melhor amigo encontra:
              </p>
              <ul style={{ fontSize: '1.05rem' }}>
                <li>✅ Banho e Tosa Profissional com os melhores produtos do mercado</li>
                <li>✅ Atendimento Veterinário com amor e responsabilidade</li>
                <li>✅ Produtos de qualidade: rações, brinquedos, acessórios e muito mais</li>
                <li>✅ Equipe apaixonada por animais, pronta para oferecer o melhor atendimento</li>
                <li>✅ Ambiente limpo, seguro e acolhedor</li>
              </ul>
              <p className="mt-3" style={{ fontSize: '1rem' }}>
                📍 Visite-nos e descubra por que somos a alegria do seu pet!<br />
                📅 Agende já um horário e garanta o bem-estar do seu companheiro!
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                🐾 Pet Shop Feliz – Porque seu pet merece o melhor! 🐾
              </p>
            </Col>
            <Col md={6}>
              <img
                src={tosaImage}
                alt="Tosadora cuidando do pet"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Aqui insira o carrossel de fotos dos pets */}
      <section className="py-5" style={{ backgroundColor: '#FFEFF7' }}>
  <Container>
    <h2 className="text-center mb-4" style={{ color: '#D63384' }}>
      🐾 Veja os pets que passaram por aqui! 🐾
    </h2>
    <CardsBanhoTosa />
  </Container>
</section>


      {/* Botão grande do WhatsApp fixo no canto inferior direito */}
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1050 }}>
        <Button
          variant="success"
          size="lg"
          onClick={openWhatsApp}
          style={{
            backgroundColor: '#25D366',
            border: 'none',
            fontWeight: '600',
            fontSize: '1.25rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '50px',
            minWidth: '220px',
          }}
          aria-label="Agendar pelo WhatsApp"
        >
          <FaWhatsapp size={28} />
          Agende pelo WhatsApp
        </Button>
      </div>
      <Footer />

    </>
  );
};

export default TosaEBanho;
