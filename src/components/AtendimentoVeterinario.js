import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Atendimento from '../assets/atendimento.png';
import Exame from '../assets/Exame.png';

const AtendimentoVeterinarioCard = () => (
    <div className="text-center">
        <Carousel interval={3000} fade indicators={false} controls={false} className="rounded mb-3">
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={Atendimento}
                    alt="Veterinária examinando cachorro"
                    style={{ height: '280px', objectFit: 'cover' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={Exame}
                    alt="Consulta veterinária com gato"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
            </Carousel.Item>
        </Carousel>

        <p style={{ fontSize: '0.95rem' }}>
            Cuidamos do seu pet com amor e dedicação. Consultas, vacinas, exames e emergências com hora marcada.
        </p>

        <ul className="text-start" style={{ fontSize: '0.9rem', paddingLeft: '1rem' }}>
            <li>✔️ Consultas clínicas</li>
            <li>✔️ Vacinação</li>
            <li>✔️ Emergência 24h</li>
        </ul>

        <Button
                        href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20veterinária%20para%20meu%20pet!"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Agendar atendimento veterinário no WhatsApp"
                        style={{ backgroundColor: '#D63384', border: 'none' }}
                        className="mt-3"
                    >
                        🐾 Agendar Consulta no WhatsApp
                    </Button>
    </div>
);

export default AtendimentoVeterinarioCard;
