// src/pages/ProdutosGeral.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaDog, FaPills } from 'react-icons/fa';
import { GiCat } from 'react-icons/gi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const produtos = [
  {
    nome: 'Cama Pet Conforto',
    preco: 'R$ 120,00',
    imagem: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=300&q=80',
    categoria: 'cachorro',
  },
  {
    nome: 'Comedouro Duplo',
    preco: 'R$ 75,00',
    imagem: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=300&q=80',
    categoria: 'gato',
  },
  {
    nome: 'Casinha de Cachorro',
    preco: 'R$ 350,00',
    imagem: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80',
    categoria: 'cachorro',
  },
  {
    nome: 'Roupa para Pet - Inverno',
    preco: 'R$ 90,00',
    imagem: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=300&q=80',
    categoria: 'gato',
  },
  {
    nome: 'Manta Pet Aconchegante',
    preco: 'R$ 65,00',
    imagem: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80',
    categoria: 'cachorro',
  },
  {
    nome: 'Tapete Higiênico Grande',
    preco: 'R$ 50,00',
    imagem: 'https://images.unsplash.com/photo-1590080877777-4bbfbca43994?auto=format&fit=crop&w=300&q=80',
    categoria: 'remedio',
  },
  {
    nome: 'Medicamento Antipulgas',
    preco: 'R$ 80,00',
    imagem: 'https://images.unsplash.com/photo-1583337130417-8a17bc7b2740?auto=format&fit=crop&w=300&q=80',
    categoria: 'remedio',
  },
];

const categorias = [
  { key: 'cachorro', label: 'Cachorro', icon: <FaDog size={36} /> },
  { key: 'gato', label: 'Gato', icon: <GiCat size={36} /> },
  { key: 'remedio', label: 'Remédio', icon: <FaPills size={36} /> },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
};

const ProdutosGeral = () => {
  const [filtro, setFiltro] = useState(null);

  const produtosFiltrados = filtro
    ? produtos.filter((p) => p.categoria === filtro)
    : produtos;

  return (
    <div style={{ backgroundColor: '#fefefe', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      <Container className="py-5">
        <h1 className="text-center mb-5" style={{ color: '#d63384', fontWeight: '600', fontSize: '2.7rem' }}>
          🛍️ Nossos Produtos
        </h1>

        <Row className="mb-4 justify-content-center text-center" style={{ gap: '2rem' }}>
          {categorias.map(({ key, label, icon }) => (
            <Col
              key={key}
              xs="auto"
              className={`category-icon ${filtro === key ? 'active' : ''}`}
              onClick={() => setFiltro(key)}
            >
              {icon}
              <div className="mt-2 fw-semibold">{label}</div>
            </Col>
          ))}

          {filtro && (
            <Col xs="auto" className="align-self-center">
              <Button variant="outline-dark" onClick={() => setFiltro(null)}>
                Mostrar Todos
              </Button>
            </Col>
          )}
        </Row>

        {produtosFiltrados.length === 0 ? (
          <p className="text-center w-100 text-muted fst-italic">
            Nenhum produto encontrado nessa categoria.
          </p>
        ) : (
          <Carousel
            responsive={responsive}
            infinite
            arrows
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {produtosFiltrados.map((produto, index) => (
              <div key={index} className="px-2">
                <Card className="produto-card">
                  <div className="produto-img-wrapper">
                    <Card.Img
                      variant="top"
                      src={produto.imagem}
                      alt={produto.nome}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column text-center">
                    <Card.Title className="fs-6 fw-bold">{produto.nome}</Card.Title>
                    <Card.Text className="text-preco">{produto.preco}</Card.Text>
                    <Button className="mt-auto saber-mais-btn" href="#">
                      Saber mais
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        )}
      </Container>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .category-icon {
          cursor: pointer;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          background-color: #f8f9fa;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .category-icon:hover {
          background-color: #ffe6f0;
          transform: scale(1.05);
        }

        .category-icon.active {
          background-color: #d63384;
          color: white;
          box-shadow: 0 0 0 3px rgba(214, 51, 132, 0.2);
        }

        .category-icon.active svg {
          color: white;
        }

        .produto-card {
          border: none;
          border-radius: 1.2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          padding: 1rem;
          background-color: #ffffff;
          height: 100%;
        }

        .produto-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(214, 51, 132, 0.15);
        }

        .produto-img-wrapper {
          background-color: #f8f8f8;
          padding: 1rem;
          border-radius: 1rem;
          margin-bottom: 1rem;
        }

        .produto-card img {
          width: 100%;
          max-height: 180px;
          object-fit: contain;
        }

        .text-preco {
          color: #d63384;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .saber-mais-btn {
          background-color: #d63384;
          border: none;
          font-weight: 600;
          width: 100%;
          transition: 0.3s ease;
          border-radius: 0.8rem;
          padding: 0.6rem 1rem;
        }

        .saber-mais-btn:hover {
          background-color: #b52b6d;
        }

        @media (max-width: 576px) {
          .category-icon {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProdutosGeral;
