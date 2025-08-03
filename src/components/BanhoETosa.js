import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banho from '../assets/Banho5.png';
import banho1 from '../assets/banho.jpg';

const BanhoETosaCard = () => (
    <div className="text-center">
        <Carousel fade interval={3000} indicators={false} controls={false} className="rounded mb-3">
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={banho}
                    alt="Banho no pet"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={banho1}
                    alt="Tosa profissional"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
            </Carousel.Item>
        </Carousel>

        <p style={{ fontSize: '0.95rem' }}>
            Banho e tosa com produtos hipoalergênicos, cuidado e carinho em ambiente climatizado.
        </p>

        <ul className="text-start" style={{ fontSize: '0.9rem', paddingLeft: '1rem' }}>
            <li>✔️ Ambiente confortável</li>
            <li>✔️ Produtos seguros</li>
            <li>✔️ Atendimento com hora marcada</li>
        </ul>

        <div className="d-flex justify-content-center gap-2 mt-3">
            <Button
                href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20veterinária%20para%20meu%20pet!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar atendimento veterinário no WhatsApp"
                style={{ backgroundColor: '#D63384', border: 'none' }}
            >
                🐾 Agendar no WhatsApp
            </Button>

            <Link to="/tosaEbanho">
                <Button variant="outline-secondary">Saiba Mais</Button>
            </Link>
        </div>
    </div>
);

export default BanhoETosaCard;
