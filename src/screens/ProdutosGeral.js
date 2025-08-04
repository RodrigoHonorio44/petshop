import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

const ProdutosGeral = () => {
  return (
    <div style={{ backgroundColor: '#FFF0F5', minHeight: '100vh' }}>
      <Header />

      <Container className="py-5">
        <h1 className="text-center mb-4" style={{ color: '#D63384' }}>
          🛒 Todos os Produtos
        </h1>

        {/* Aqui você pode inserir os cards ou lista de produtos */}
        <p className="text-center">
          Em breve todos os nossos produtos estarão disponíveis nesta página!
        </p>
      </Container>

      <Footer />
    </div>
  );
};

export default ProdutosGeral;
