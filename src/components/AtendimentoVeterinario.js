import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ✅ Import necessário
import Atendimento from '../assets/atendimento.png';
import Exame from '../assets/Exame.png';

const AtendimentoVeterinarioCard = () => (
  <div className="text-center px-3 px-md-0">
    <Carousel interval={3000} fade indicators={false} controls={false} className="rounded mb-3">
      <Carousel.Item>
        <img
          className="d-block w-100 rounded img-fluid"
          src={Atendimento}
          alt="Veterinária examinando cachorro"
          style={{ objectFit: 'cover', maxHeight: '320px', width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded img-fluid"
          src={Exame}
          alt="Consulta veterinária com gato"
          style={{ objectFit: 'cover', maxHeight: '320px', width: '100%' }}
        />
      </Carousel.Item>
    </Carousel>

    <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      Cuidamos do seu pet com amor e dedicação. Consultas, vacinas, exames e emergências com hora marcada.
    </p>

    <ul className="text-start" style={{ fontSize: '0.95rem', paddingLeft: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
      <li>✔️ Consultas clínicas</li>
      <li>✔️ Vacinação</li>
      <li>✔️ Emergência 24h</li>
    </ul>

    <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
      <Button
        href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20veterinária%20para%20meu%20pet!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar atendimento veterinário no WhatsApp"
        style={{ backgroundColor: '#D63384', border: 'none', fontSize: '0.9rem', padding: '6px 16px' }}
      >
        🐾 Agendar no WhatsApp
      </Button>

      <Link to="/veterinario">
        <Button
          variant="outline-secondary"
          style={{ fontSize: '0.9rem', padding: '6px 16px' }}
        >
          Saber Mais
        </Button>
      </Link>
    </div>
  </div>
);

export default AtendimentoVeterinarioCard;
