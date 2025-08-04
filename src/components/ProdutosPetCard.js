import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import coleira from '../assets/coleira.png';
import brinquedos from '../assets/brinquedos.png';

const ProdutosPetCard = () => (
  <div className="text-center">
    <Carousel
      fade
      interval={3000}
      indicators={false}
      controls={false}
      className="rounded mb-3"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={coleira}
          alt="Coleira para pet"
          style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={brinquedos}
          alt="Brinquedos para pet"
          style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
        />
      </Carousel.Item>
    </Carousel>

    <p style={{ fontSize: '0.95rem' }}>
      Produtos selecionados com carinho para o bem-estar e felicidade do seu pet.
    </p>

    <ul className="text-start" style={{ fontSize: '0.9rem', paddingLeft: '1rem' }}>
      <li>✔️ Coleiras resistentes e estilosas</li>
      <li>✔️ Petiscos naturais e saudáveis</li>
      <li>✔️ Brinquedos educativos</li>
    </ul>

    <Button
      href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20pet%20disponíveis!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar sobre produtos pet no WhatsApp"
      style={{ backgroundColor: '#D63384', border: 'none' }}
      className="mt-3"
    >
      🐶 Ver Produtos no WhatsApp
    </Button>
  </div>
);

export default ProdutosPetCard;
