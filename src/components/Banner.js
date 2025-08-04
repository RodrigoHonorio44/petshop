import React from 'react';
import { Carousel } from 'react-bootstrap';
import './../style/Banner.css'; 
import Design from '../assets/Design1.png';
import Propaganda from '../assets/propaganda.png';
import Simparic from '../assets/simparic.png';
import Brinquedos from '../assets/brinquedos.png';
import Petiscos from '../assets/petiscos.png';

const Banner = () => {
    return (
        <Carousel interval={4000} controls indicators>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img img-fluid"
                    src={Simparic}
                    alt="Cachorro com proteção"
                />
                <Carousel.Caption className="banner-caption">
                    <h3>🐾 Cachorro Feliz</h3>
                    <p>É Cachorro Protegido contra pulgas e carrapatos!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img img-fluid"
                    src={Brinquedos}
                    alt="Pet shop moderno"
                />
                <Carousel.Caption className="banner-caption">
                    <h3>🏬 Loja completa</h3>
                    <p>Rações, brinquedos e muito mais para seu pet</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img img-fluid"
                    src={Petiscos}
                    alt="Petiscos para cachorro"
                />
                <Carousel.Caption className="banner-caption">
                    <h3>❤️ Cuidado e confiança</h3>
                    <p>Seu pet merece os melhores Petiscos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img img-fluid"
                    src={Propaganda}
                    alt="Linha Hydra Pet"
                />
                <Carousel.Caption className="banner-caption">
                    <h3>✨ Hidra Pet - Cuidado premium</h3>
                    <p>Seu pet merece o melhor banho com Hydra Pet!</p>
                    <a
                        href="https://www.hidrapet.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ marginTop: '10px' }}
                    >
                        Saiba Mais
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
