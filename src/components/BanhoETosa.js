import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banho from '../assets/Banho5.png';
import banho1 from '../assets/banho.jpg';

const BanhoETosaCard = () => (
  <div className="text-center px-3 px-md-0"> {/* padding horizontal para celulares */}
    <Carousel fade interval={3000} indicators={false} controls={false} className="rounded mb-3">
      <Carousel.Item>
        <img
          className="d-block w-100 rounded img-fluid"
          src={banho}
          alt="Banho no pet"
          style={{ objectFit: 'cover', maxHeight: '320px', width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded img-fluid"
          src={banho1}
          alt="Tosa profissional"
          style={{ objectFit: 'cover', maxHeight: '320px', width: '100%' }}
        />
      </Carousel.Item>
    </Carousel>

    <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      Banho e tosa com produtos hipoalergênicos, cuidado e carinho em ambiente climatizado.
    </p>

    <ul className="text-start" style={{ fontSize: '0.95rem', paddingLeft: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
      <li>✔️ Ambiente confortável</li>
      <li>✔️ Produtos seguros</li>
      <li>✔️ Atendimento com hora marcada</li>
    </ul>

    <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
      <Button
        href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20veterinária%20para%20meu%20pet!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar atendimento veterinário no WhatsApp"
        style={{ backgroundColor: '#D63384', border: 'none', minWidth: '150px' }}
        className="mb-2"
      >
        🐾 Agendar no WhatsApp
      </Button>

      <Link to="/servicos" className="mb-2">
        <Button variant="outline-secondary" style={{ minWidth: '150px' }}>
          Saiba Mais
        </Button>
      </Link>
    </div>
  </div>
);

export default BanhoETosaCard;
