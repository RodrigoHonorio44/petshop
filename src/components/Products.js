// src/components/Products.js
import React, { useRef, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../style/Products.css';
import Coleira from '../assets/coleira.png';
import Plaquinha from '../assets/plaquinha.png';
import Shampoo from '../assets/shampoo.png';
import Bifinho from '../assets/bifinho.png';
import Osso from '../assets/osso.png';
import Bola from '../assets/bola.png';

const products = [
  {
    name: 'Coleira Ajustável Tamanho P',
    price: 'R$ 39,90',
    image: Coleira,
  },
  {
    name: 'Plaquinha de Identificação',
    price: 'R$ 24,90',
    image: Plaquinha,
  },
  {
    name: 'Shampoo Hydra Pro Pelos Claros 1:10 Litros',
    price: 'R$ 130,00',
    image: Shampoo,
  },
  {
    name: 'BIFINHO NATURAL PARA CÃES BEAUTY 300G - NATS',
    price: 'R$ 32,90',
    image: Bifinho,
  },
  {
    name: 'Osso Mordedor de Borracha várias cores',
    price: 'R$ 29,90',
    image: Osso,
  },
  {
    name: 'Brinquedo Interativo Bola Tutelo',
    price: 'R$ 56,00',
    image: Bola,
  },
];

const Products = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    const scrollAmount = 320;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ backgroundColor: '#FFF0F5' }}>
      <Container id="produtos" className="py-5 position-relative">
        <h2 className="text-center mb-4" style={{ color: '#D63384' }}>
          🛍️ Produtos em Destaque
        </h2>

        <Button
          variant="light"
          className="carousel-arrow left"
          onClick={() => scroll('left')}
          aria-label="Scroll produtos para esquerda"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 10,
            transform: 'translateY(-50%)',
          }}
        >
          <FaChevronLeft color="#D63384" />
        </Button>

        <Button
          variant="light"
          className="carousel-arrow right"
          onClick={() => scroll('right')}
          aria-label="Scroll produtos para direita"
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 10,
            transform: 'translateY(-50%)',
          }}
        >
          <FaChevronRight color="#D63384" />
        </Button>

        <div
          ref={carouselRef}
          className="d-flex overflow-auto hide-scrollbar px-2"
          style={{ scrollBehavior: 'smooth', gap: '1rem' }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card-wrapper"
              style={{ flex: '0 0 auto', minWidth: '280px', maxWidth: '320px' }}
            >
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: '175px', objectFit: 'contain', padding: '10px' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ fontSize: '1rem' }}>{product.name}</Card.Title>
                  <Card.Text>Preço: {product.price}</Card.Text>
                  <Button
                    style={{ backgroundColor: '#D63384', border: 'none' }}
                    className="mt-auto"
                  >
                    Ver Produto
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
